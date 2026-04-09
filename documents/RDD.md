# ARoom - Requirements Design Document

## 概要

**プロジェクト名:** ARoom  
**種別:** モックアップ / プロトタイプ  
**概要:** WebブラウザでARを使って家具を部屋に配置できるアプリ

---

## 目的

- AR家具配置の体験をブラウザだけで提供する
- 将来的なネイティブアプリ化（iOS / Android）への足がかりとなるMVPを作る

---

## ターゲット環境

| プラットフォーム | 対応方法 |
|----------------|---------|
| Android Chrome | WebXR Hit Test API |
| iOS Safari | AR Quick Look（USDZフォールバック） |
| PC ブラウザ | 3Dビューワーモード（AR無効） |

---

## 主要機能

### MVP スコープ
- [ ] 家具の3Dモデル表示（GLTF / GLB）
- [ ] AR モードの起動（WebXR / AR Quick Look）
- [ ] 床面への家具配置
- [ ] 家具の移動・回転操作
- [ ] 家具カタログ（複数モデルの選択）

### スコープ外（モックアップでは対応しない）
- ユーザー認証・アカウント管理
- 家具のカート・購入機能
- 部屋の保存・シェア機能

---

## 技術スタック

| 役割 | 技術 |
|------|------|
| 3Dレンダリング | Three.js または `<model-viewer>` |
| AR（Android） | WebXR Hit Test API |
| AR（iOS） | AR Quick Look / USDZ |
| 3Dモデル形式 | GLTF / GLB（Web）、USDZ（iOS） |
| ホスティング | Vercel |

---

## 非機能要件

- ブラウザのインストール不要で動作すること
- URLを共有するだけでステークホルダーがすぐ確認できること
- モデルのロード時間は可能な限り短く保つこと

---

## 将来的な拡張方針

- Unity AR Foundation によるネイティブアプリ化（iOS / Android）
- 3DモデルはGLTF形式で共通化し、Web・ネイティブ間で使い回す

---

*作成日: 2026-04-09*