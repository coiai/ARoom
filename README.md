# ARoom

WebブラウザでARを使って家具を部屋に配置できるアプリのプロトタイプ。

## 機能

- 家具カタログの一覧・カテゴリフィルター
- 3Dモデルビューワー（回転・ズーム操作）
- ARモード（Android: WebXR / iOS: AR Quick Look）

## 対応環境

| プラットフォーム | 対応方法 |
|---|---|
| Android Chrome | WebXR Hit Test API |
| iOS Safari | AR Quick Look (USDZ) |
| PC ブラウザ | 3Dビューワーモード |

## 技術スタック

- React 19
- Vite 8
- `<model-viewer>` (3D / AR)
- GLTF / GLB

## セットアップ

```bash
npm install
npm run dev
```

## スクリプト

| コマンド | 説明 |
|---|---|
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | プロダクションビルド |
| `npm run preview` | ビルド結果のプレビュー |
| `npm run lint` | ESLint実行 |
