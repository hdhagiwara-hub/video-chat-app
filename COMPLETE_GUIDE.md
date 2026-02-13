# 完全ガイド：ゼロから始めるビデオチャット公開

## 📦 ダウンロードしたファイル

```
simple-video-chat/
├── package.json
├── server.js
├── public/
│   └── index.html
└── README.md
```

---

## ステップ1: GitHubアカウント作成（5分）

### 1-1. サインアップ

1. https://github.com/ にアクセス
2. 右上の「Sign up」をクリック
3. メールアドレス入力
4. パスワード設定
5. ユーザー名決定
6. メール認証

完了！

---

## ステップ2: GitHubにコード登録（10分）

### 2-1. 新規リポジトリ作成

1. GitHubにログイン
2. 右上の「+」→「New repository」
3. 入力:
   - Repository name: `simple-video-chat`
   - Public を選択
   - **「Add a README file」にチェックを入れない**
4. 「Create repository」クリック

### 2-2. ファイルをアップロード

1. 作成したリポジトリページで「uploading an existing file」をクリック
2. ダウンロードした全ファイルをドラッグ&ドロップ:
   - package.json
   - server.js
   - README.md
   - public フォルダ（フォルダごと）

**重要:** フォルダ構造を保つこと！

3. 下の「Commit changes」をクリック

完了！

---

## ステップ3: Render.comアカウント作成（5分）

1. https://render.com/ にアクセス
2. 「Get Started」クリック
3. 「Sign Up with GitHub」を選択
4. GitHubアカウントで認証
5. Renderに権限を許可

完了！

---

## ステップ4: デプロイ（10分）

### 4-1. 新規サービス作成

1. Renderダッシュボードで「New +」→「Web Service」
2. **「Git Provider」を選択**
3. **「GitHub」をクリック**
4. リポジトリ一覧から「simple-video-chat」を探す
5. 右の「Connect」をクリック

### 4-2. 設定入力

| 項目 | 入力 |
|------|------|
| Name | `simple-video-chat` |
| Region | `Singapore` |
| Branch | `main` |
| Build Command | `npm install` |
| Start Command | `npm start` |
| Instance Type | `Free` |

### 4-3. デプロイ開始

1. 一番下の「Create Web Service」をクリック
2. デプロイ開始（5〜10分）
3. 「Your service is live 🎉」と表示されたら完了！

---

## ステップ5: 使ってみる（5分）

### 5-1. URLを確認

画面上部に表示されているURL:
```
https://simple-video-chat-xxxx.onrender.com
```

### 5-2. アクセス

1. URLをクリック
2. 名前を入力（例: 太郎）
3. ルームID入力（例: room1）
4. 「参加」クリック
5. 「📹 開始」クリック
6. カメラ許可

### 5-3. 複数人でテスト

1. 別のブラウザまたはスマホで同じURLを開く
2. **同じルームID**を入力（例: room1）
3. お互いの映像が表示される！

---

## 🎉 完成！

あなたのビデオチャットURL:
```
https://simple-video-chat-xxxx.onrender.com
```

このURLを友達に送れば一緒にビデオチャットできます！

---

## 💡 使い方

### 基本操作

- **📹 開始**: カメラを起動
- **⏹ 停止**: カメラを停止
- **🎤 ON/OFF**: マイクの切り替え
- **退出**: ルームから退出

### 背景変更

1. 「OFF」: 背景なし
2. 「ぼかし」: 背景をぼかす
3. カラーボタン: 単色背景
4. 「画像」: 自分の画像をアップロード
5. 「色」: 好きな色を選択
6. スライダー: ぼかし強度調整

### ビデオ操作

- **クリック**: ビデオを拡大表示
- **もう一度クリック**: 元のサイズに戻る

### チャット

- 下のチャット欄にメッセージ入力
- 「送信」または Enter キー

---

## ⚠️ よくある問題

### Q1: カメラが映らない

**解決策:**
1. HTTPSでアクセスしているか確認（URLが`https://`で始まる）
2. ブラウザでカメラを「許可」にする
3. F12キーでConsoleを開いてエラー確認

### Q2: 他の人の映像が見えない

**解決策:**
1. 同じルームIDを入力しているか確認
2. 両方とも「📹 開始」を押したか確認
3. しばらく待つ（接続に数秒かかることがある）

### Q3: スマホで使えない

**解決策:**
1. HTTPSでアクセス（`https://`）
2. 最新のブラウザを使用（Chrome、Safari）
3. カメラとマイクの許可を確認

### Q4: 15分で止まる

**原因:** 無料プランは15分使わないとスリープします

**解決策:**
- 再度URLにアクセス（30秒で復帰）
- または有料プラン（月7ドル）

---

## 🔧 カスタマイズ

### デザイン変更

`public/index.html` の `<style>` 部分を編集

### 機能追加

`public/index.html` の `<script>` 部分を編集

GitHubで編集して、Renderが自動で再デプロイします。

---

## 📱 スマホ対応

- iOS Safari: ✅
- Android Chrome: ✅
- 縦画面・横画面: ✅

---

## 🆘 困ったときは

1. **Renderのログを確認**
   - Dashboard → Logs タブ

2. **ブラウザのコンソールを確認**
   - F12キー → Console タブ

3. **再デプロイ**
   - Render Dashboard → Manual Deploy → Deploy latest commit

---

おめでとうございます！🎊
