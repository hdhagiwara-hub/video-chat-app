# シンプルビデオチャット

P2Pビデオチャット with バーチャル背景

## セットアップ

### ローカルテスト

```bash
npm install
npm start
```

http://localhost:3000 でアクセス

### Render.comデプロイ

#### 1. GitHubにアップロード

1. GitHubで新規リポジトリ作成（例: `simple-video-chat`）
2. 以下のファイルをアップロード:
   - package.json
   - server.js
   - public/index.html

#### 2. index.htmlを修正（重要！）

`public/index.html` の約239行目を変更:

**変更前:**
```javascript
socket = io();
```

**変更後:**
そのまま（既に正しい）

#### 3. Render.comでデプロイ

1. https://render.com/ でアカウント作成
2. New + → Web Service
3. Git Provider → GitHub → リポジトリ選択
4. 設定:
   - Name: `simple-video-chat`
   - Region: `Singapore`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Instance Type: `Free`
5. Create Web Service

完了！

## 使い方

1. 名前とルームIDを入力して「参加」
2. 「📹 開始」でカメラ起動
3. 背景ボタンで背景変更
4. ビデオをクリックで拡大/縮小

## 機能

- ✅ P2Pビデオ通話
- ✅ バーチャル背景（ぼかし、色、画像）
- ✅ クリックで拡大表示
- ✅ チャット
- ✅ シンプルUI

## 注意

- HTTPSが必須（Renderは自動対応）
- 最新ブラウザ推奨
- 無料プランは15分でスリープ
