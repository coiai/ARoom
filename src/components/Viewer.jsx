import { useEffect, useRef, useState } from 'react';
import '@google/model-viewer';

export default function Viewer({ furniture }) {
  const viewerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const el = viewerRef.current;
    if (!el) return;

    const onLoad = () => setLoading(false);
    const onError = () => {
      setLoading(false);
      setError(true);
    };

    el.addEventListener('load', onLoad);
    el.addEventListener('error', onError);
    return () => {
      el.removeEventListener('load', onLoad);
      el.removeEventListener('error', onError);
    };
  }, [furniture.id]);

  return (
    <div className="viewer">
      {loading && !error && (
        <div className="viewer-loading">
          <div className="spinner" />
          <p>3Dモデルを読み込み中...</p>
        </div>
      )}
      {error && (
        <div className="viewer-error">
          <p>モデルの読み込みに失敗しました</p>
          <p className="viewer-error-sub">ネットワーク接続を確認してください</p>
        </div>
      )}
      <model-viewer
        ref={viewerRef}
        src={furniture.modelUrl}
        ios-src={furniture.iosSrc}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        touch-action="pan-y"
        auto-rotate
        shadow-intensity="1"
        shadow-softness="0.5"
        exposure="1"
        style={{
          width: '100%',
          height: '100%',
          opacity: loading || error ? 0 : 1,
          transition: 'opacity 0.3s',
        }}
      >
        <button slot="ar-button" className="ar-slot-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3L2 8l10 5 10-5-10-5z"/>
            <path d="M2 8v8l10 5"/>
            <path d="M22 8v8l-10 5"/>
          </svg>
          ARで見る
        </button>
      </model-viewer>
    </div>
  );
}
