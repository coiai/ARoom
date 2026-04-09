# ARoom - プロジェクト構成

## ディレクトリ構造

```
aroom/
├── documents/              # ドキュメント
│   ├── RDD.md              # 要件設計書
│   └── ARCHITECTURE.md     # 本ファイル
├── public/
│   └── icons.svg           # 共通SVGアイコン
├── src/
│   ├── assets/             # 画像・SVG素材
│   ├── components/         # Reactコンポーネント
│   │   ├── Header.jsx      # ヘッダー（ロゴ・ナビゲーション）
│   │   ├── Catalog.jsx     # 家具カタログ一覧
│   │   └── Viewer.jsx      # 3Dビューワー・AR起動
│   ├── data/
│   │   └── furniture.js    # 家具・カテゴリデータ
│   ├── App.jsx             # ルートコンポーネント（画面切り替え）
│   ├── App.css             # コンポーネント用スタイル
│   ├── index.css           # デザインシステム（変数・リセット・タイポグラフィ）
│   └── main.jsx            # エントリーポイント
├── index.html              # HTMLテンプレート
├── vite.config.js          # Vite設定（React / SSL / ホスト公開）
└── package.json
```

## 技術スタック

| 役割 | 技術 |
|---|---|
| フレームワーク | React 19 |
| ビルドツール | Vite 8 |
| 3D / AR | `<model-viewer>` (`@google/model-viewer`) |
| 3Dモデル形式 | GLTF / GLB |
| ローカルSSL | `@vitejs/plugin-basic-ssl` |
| ホスティング | Vercel（予定） |

## 画面構成

```
App
├── Header          常時表示。ロゴクリックでカタログに戻る
├── Catalog         家具一覧画面（デフォルト）
│   ├── Hero        キャッチコピー
│   ├── CategoryFilter  カテゴリ絞り込みボタン
│   └── FurnitureGrid   家具カードの一覧
└── Viewer          3Dビューワー画面（家具選択時）
    ├── ViewerHeader    戻るボタン・家具名
    ├── ViewerCanvas    model-viewer（3D表示・AR起動）
    └── ViewerInfo      家具名・説明・価格・寸法
```

## 状態管理

App.jsxで2つのstateを管理し、propsで子コンポーネントに渡すシンプルな構成。

| state | 型 | 用途 |
|---|---|---|
| `selectedFurniture` | `object \| null` | 選択中の家具。nullならカタログ表示 |
| `category` | `string` | 選択中のカテゴリID（`'all'`がデフォルト） |

## デザイン

coiaiデザインガイドラインに準拠。

- カラー: coiai Navy (`#2434A9`) をアクセントに、白背景 + ライトグレーのカード
- フォント: Noto Sans JP / Helvetica
- レイアウト: 左寄せ、最大幅1200px、カード16px角丸、ボタン完全角丸
- ダークモード対応（`prefers-color-scheme`）
