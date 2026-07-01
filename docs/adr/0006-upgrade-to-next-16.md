# Next.js を 16 系へメジャー更新し、キャッシュモデルを移行する

公開前のセキュリティ対応として、Next.js を `14.1.4` から最新安定版 `16.2.9` に更新する。
14 系は RSC のキャッシュ汚染・DoS・App Router の XSS 等の脆弱性が **15.5.16 以降でしか
修正されておらず backport されない**（14 系はセキュリティ的に行き止まり）ため、パッチ更新
（14.2.35）では不十分と判断し、メジャー更新に切り替えた。React も 19、ESLint も 9 へ更新する。

## なぜ 16（15 ではなく）

報告脆弱性は 15.5.16+ で解消するため 15 系でも要件は満たせるが、移行作業の大半（async
request API・キャッシュ既定変更）は 15/16 で共通のため、サポート期間が最長になる 16 を選択した。
Node は現行 20.15 で 16 の要件（>=20.9）を満たす。

## 移行に伴う破壊的変更への対応

- **async request API:** `params` / `searchParams` を `Promise` 化し `await` する
  （`articles/[id]`・`categories/[slug]` のページと `generateMetadata`）。`draftMode()` も
  `await draftMode()` に変更（`api/draft`・`api/draft/disable`・記事ページ）。
- **キャッシュ既定の変更:** Next 15+ は fetch の既定が `no-store`。ADR-0003 の SSG/ISR を維持する
  ため、microCMS の通常取得を `cache: "force-cache"` + `next: { tags }` に明示変更。下書き
  プレビューは `cache: "no-store"` に分離（`draftKey` の有無で切替）。
- **revalidateTag の第2引数必須化:** `revalidateTag(tag, profile)` に変更。Webhook からの
  即時反映のため `{ expire: 0 }`（即時失効）を指定する。
- **Turbopack ビルドの CSS Modules 純粋セレクタ規則:** 要素のみのセレクタ
  `main section:not(.LP)` を対象セクションのクラス列挙に書き換え（`.LP` は `<main>` 外のため
  旧 `:not(.LP)` は元々冗長だった）。
- **ESLint 9:** flat config が既定になったため `.eslintrc.json` を `eslint.config.mjs` に移行
  （`eslint-config-next/core-web-vitals` を spread）。

## Status

ADR-0003（SSG + オンデマンド再検証）の方針は維持。実装レベルで、fetch のキャッシュを
明示（force-cache）し、`revalidateTag` を 2 引数形式に更新する点を補足・更新する。

## Consequences

- `/articles/[id]` は `draftMode()` / `searchParams` 参照により Dynamic 判定だが、
  force-cache により microCMS データは Data Cache から供給され、`revalidateTag` で更新される
  （毎リクエストで microCMS を叩くわけではない）。これは 14 系時点と同じ挙動。
- 高深刻度の Next.js 脆弱性は解消。残る `npm audit` の moderate 4 件（postcss/nanoid/
  brace-expansion）はビルド時・開発ツールの推移的依存で、開発者が書いた CSS しか扱わない
  本サイトでは実質的に悪用不可のため許容する。
- 新カテゴリ/セクションをトップに追加する場合、`page.module.css` のセクション余白ルール
  （クラス列挙）にも追記が必要。
