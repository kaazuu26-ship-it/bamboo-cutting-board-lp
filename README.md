# 竹製まな板 - 漫画LP

Meta広告から流入したユーザーに、漫画で商品をアピールし、LSEG限定クーポン経由で楽天商品ページへ誘導するランディングページです。

---

## 📁 ファイル構成

```
竹製まな板_LP作業/
├── index.html          # メインページ
├── style.css           # スタイル
├── script.js           # JavaScript（ボタン制御）
├── config.json         # 設定ファイル（URL設定用）
├── README.md           # このファイル
└── images/             # 漫画画像フォルダ
    ├── image1.png - image9.png   # 本編1～9
    ├── cta1.png                  # 中間CTA
    ├── image10.png - image18.png # 本編10～18
    └── cta2.png                  # 最後CTA
```

---

## ⚙️ 設定方法

### 1. config.json を編集

以下の項目を設定してください：

```json
{
  "couponUrl": "https://lseg.jp/coupon/xxxxx",  // LSEG クーポン URL
  "productUrl": "https://www.rakuten.co.jp/shop/item/xxxxx",  // 楽天商品 URL
  "pixelId": ""  // Meta Pixel ID（オプション）
}
```

### 2. LSEG クーポン URL を取得

- LSEG にログイン
- クーポンを作成または選択
- クーポンのシェア URL をコピー
- `config.json` の `couponUrl` に貼り付け

### 3. 楽天商品 URL を取得

- 楽天RMS で商品ページを開く
- URL をコピー
- `config.json` の `productUrl` に貼り付け

---

## 🎨 ページ構成

### 構成順序

1. **ヘッダー** - 商品名とクーポン案内
2. **本編画像 1～9** - 漫画コンテンツ（前半）
3. **中間CTA（cta1.png）** - クーポン獲得 & 商品ページボタン
4. **本編画像 10～18** - 漫画コンテンツ（後半）
5. **最後CTA（cta2.png）** - クーポン獲得 & 商品ページボタン
6. **フッター** - コピーライト

---

## 📱 レスポンシブ対応

- **スマホファースト設計**
- **幅 768px 以上** : 自動的に段を広げる
- **幅 480px 以下** : フォントサイズを調整

---

## 🔗 ボタン機能

### クーポンを獲得するボタン
- LSEG クーポン URL を新しいタブで開く
- クリック時に Google Analytics 相当で計測可能

### 商品を見るボタン
- 楽天商品ページへ誘導（同タブで遷移）
- クリック時に Google Analytics 相当で計測可能

---

## 📊 Meta Pixel の埋め込み（オプション）

Meta Pixel を使用する場合：

1. `script.js` の下部にあるコメント部分を有効化
2. `YOUR_PIXEL_ID_HERE` を実際の Meta Pixel ID に置き換え
3. ファイルを保存

```javascript
fbq('init', 'YOUR_PIXEL_ID_HERE'); // ← ここに Meta Pixel ID を設定
```

---

## 🚀 デプロイ方法（Vercel を使う場合）

### 手順

1. GitHub アカウント を作成（未作成の場合）
2. このフォルダを GitHub リポジトリとして push
3. Vercel にログイン（GitHub アカウントで）
4. 新規プロジェクト → このリポジトリを選択
5. デプロイ → URL が自動生成

### デプロイ後

- `config.json` を編集
- GitHub に push → Vercel が自動更新

---

## ⚡ ローカルテスト

### 簡単なテスト方法

**Python** がインストールされていれば：

```bash
cd 竹製まな板_LP作業
python -m http.server 8000
```

ブラウザで `http://localhost:8000` を開く

---

## 📝 注意点

- `config.json` に秘密情報（API キーなど）を入れない
- LSEG クーポン URL は公開 LP に埋め込まれるため、通常のクーポン URL を使用
- Meta Pixel を使う場合は、計測の同意確認を行うこと

---

## 📧 サポート

問題が発生した場合：

1. ブラウザの開発者ツール（F12）をを開く
2. コンソールにエラーメッセージがないか確認
3. `config.json` の URL が正しいか確認
4. `images/` フォルダに全ての画像があるか確認

---

## 🎯 効果測定

### 確認すべき指標

- **Meta 広告側**：CTR、クリック数
- **LSEG / 楽天側**：クーポン利用数、売上
- **Google Analytics**：ページビュー数、転換率

---

## 📦 ファイルサイズ

- HTML：約 5KB
- CSS：約 3KB
- JavaScript：約 3KB
- 画像：各ファイルサイズに依存

推奨画像サイズ（各画像）：
- 幅：768px
- 高さ：600px
- 形式：PNG / JPG

---

最終更新：2026年5月13日
