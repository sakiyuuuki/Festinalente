# デザイントークン仕様

[ADR-0004](./adr/0004-visual-design-language.md) で決めたデザイン言語の具体値。
`globals.css` の `:root` に CSS カスタムプロパティとして定義し、各 CSS Module から参照する。

## カラー

> [ADR-0005](./adr/0005-revert-to-original-font-and-palette.md) により、当初のインディゴ刷新（ADR-0004）を撤回し、
> **元の緑＋テラコッタ**の配色を正式トークンとして採用する。

```
/* Primary (green) — リンク・アクセント・区切り線・タグ */
--color-primary:        #2cb67d;
--color-primary-hover:  #22946a;
--color-primary-weak:   #e7f6ef;  /* タグ背景・淡いハイライト */

/* CTA (terracotta) — 主要ボタン(moreinfo 等)のみ */
--color-cta:            #da9168;
--color-cta-hover:      #b98a6e;

/* Neutral (grayscale) */
--color-text:           #1f2328;  /* 本文 */
--color-text-muted:     #5c6470;  /* 補助テキスト・日付 */
--color-border:         #e5e7eb;
--color-surface:        #ffffff;  /* カード・記事面 */
--color-bg:             #fafafa;  /* ページ背景 */
--color-bg-subtle:      #f1f0f0;  /* セクション背景 */
--color-code-bg:        #0f172a;  /* コードブロック背景（ダーク） */
```

## タイポグラフィ

> [ADR-0005](./adr/0005-revert-to-original-font-and-palette.md) により、明朝見出し×ゴシック本文（ADR-0004）を撤回し、
> **元どおりサイト全体を明朝**に戻す。

すべて `next/font` でホスト。

| 用途 | フォント |
|------|----------|
| 見出し・ロゴ・**本文/UI** | Zen Old Mincho（明朝）＝サイト全体 |
| コード | JetBrains Mono 等 monospace |

```
/* type scale (16px 基準) */
--font-size-h1: 2.5rem;
--font-size-h2: 1.875rem;
--font-size-h3: 1.375rem;
--font-size-body: 1.0625rem;
--font-size-small: 0.875rem;
--line-height-body: 1.9;     /* 日本語長文向けにゆとり */
--line-height-heading: 1.4;
```

## 余白スケール（8px 基準）

```
--space-1: 4px;   --space-2: 8px;   --space-3: 16px;
--space-4: 24px;  --space-5: 40px;  --space-6: 64px;  --space-7: 96px;
```

## レイアウト / レスポンシブ

```
--container:        1040px;  /* 一般ページ最大幅 */
--container-narrow: 760px;   /* 記事本文の最大幅（可読性優先） */
--radius:           8px;
```

ブレークポイント（min-width ではなく max-width で縮小対応）:

```
sm: 640px   md: 768px   lg: 1024px
```

- 固定 px 幅（`news_section: 840px` 等）は `max-width + width:100%` の流動指定へ置き換える。
- モバイルナビ: ハンバーガー → 右からのドロワー（背景オーバーレイ＋スクロールロック）。
