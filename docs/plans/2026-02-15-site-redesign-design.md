# tockn.dev サイトリデザイン

## 概要

個人サイト tockn.dev を Hugo ベースの旧サイトから Astro + MDX でゼロから再構築する。
ポートフォリオ + ブログとして機能し、温かみのあるダークモード × ミニマルクリーンなデザインを目指す。

## カラーパレット

| 用途 | カラー | 説明 |
|------|--------|------|
| 背景 | `#1a1a1a` | 温かみのあるダークグレー |
| テキスト | `#e8e0d8` | ウォームホワイト |
| アクセント | `#c8956c` | テラコッタ / ウォームオレンジ |
| サブテキスト | `#8a8078` | ウォームグレー |
| カード背景 | `#222222` | 微妙なコントラスト |

## タイポグラフィ

- 日本語: Noto Sans JP
- 英語/コード: Inter
- フォントサイズ大きめ、行間ゆったり

## ページ構成

### トップページ (`/`)

ハイブリッド型。各セクションのサマリーを表示し、詳細は個別ページへ。

**ヘッダー:**
- 左: 「tockn」（アクセントカラー）
- 右: `Blog` / `About`
- 固定ではなくスクロールで消える

**ヒーロー:**
- 画面高さ 40-50%
- 名前「Takuto Sato」+ キャッチコピー + ソーシャルアイコン
- アバター画像あり（暖色トーンの写真）

**ブログセクション:**
- 「Recent Posts」+ 「View All →」
- 最新3件をリスト形式で表示
- 外部記事（Zenn/Qiita）にはプラットフォームアイコンバッジ

**経歴セクション:**
- 「Career」+ 「More →」
- 直近2-3社のサマリー

**フッター:**
- ソーシャルリンク + コピーライト

### ブログ一覧 (`/blog`)

- 年ごとにグルーピングしたリスト表示
- 各記事: タイトル + 日付 + タグ
- 外部記事はプラットフォームアイコン付き、クリックで外部遷移
- サイト内記事は `/blog/[slug]` に遷移

### ブログ記事 (`/blog/[slug]`)

- タイトル + 日付 + タグ
- MDX レンダリング（Shiki でシンタックスハイライト）
- 下部に「← Back to Blog」
- OGP 対応

### 経歴ページ (`/about`)

- 簡単な自己紹介文（2-3行）
- 縦線タイムライン形式
  - 会社名（太字）+ 期間（サブテキスト）
  - やったこと（1-2行）
  - 技術スタック（タグバッジ）

## デザイン原則

- 余白たっぷり
- 装飾最小限、コンテンツで語る
- カード: 角丸控えめ（4px）、シャドウなし、ボーダーで区切り
- ホバーでアクセントカラーがふわっと出る程度
- 派手なアニメーションなし、フェードイン程度

## 技術構成

```
src/
  components/       — Header, Footer, Hero, BlogList, Timeline, SocialLinks
  layouts/          — BaseLayout.astro
  pages/
    index.astro     — トップページ
    about.astro     — 経歴ページ
    blog/
      index.astro   — ブログ一覧
      [...slug].astro — 記事詳細
  content/
    blog/           — MDX ブログ記事
  data/
    career.ts       — 経歴データ
    external-posts.ts — Zenn/Qiita 外部記事リンク
  styles/
    global.css      — カラー変数、タイポグラフィ、リセット
public/
  images/           — アバター画像等
```

**技術選定:**
- Astro v5（Content Collections）
- Vanilla CSS（CSS 変数でテーマ管理）
- Shiki（シンタックスハイライト）
- Google Fonts（Noto Sans JP + Inter）
- GitHub Pages デプロイ

**外部記事管理:**
- `external-posts.ts` に手動で追加
- `{ title, url, date, platform: "zenn" | "qiita", tags }` 形式
- 内部記事と日付でマージして一覧表示

## スコープ外（YAGNI）

- ライトモード切替
- 検索機能
- コメント機能
- RSS/Atom フィード
- i18n
- プロジェクト一覧（旧 HakoNote, Twitro は削除）
