# Article 本文はリッチエディタ HTML をサーバーサイドで構文ハイライトする

Article の本文（`content`）は microCMS のリッチエディタで執筆し（HTML を返す）、サーバーサイドで
その HTML を parse してコードブロックに構文ハイライト（Shiki 等）を付与してから描画する。
本サイトは技術学習ブログでコードブロックが頻出するため、クライアント JS ゼロ・チラつきなし・
microCMS 上での執筆容易性を満たすこの構成を選んだ。

## Considered Options

- リッチエディタ + クライアントサイドハイライト（Prism/highlight.js）— 導入は手軽だが FOUC とクライアント JS が増える。
- Markdown フィールド + react-markdown — コード執筆は快適だが microCMS のプレビュー・装飾機能を失う。

## Consequences

- サーバー側に「microCMS の HTML を parse → コードブロックを Shiki で再描画」する変換層が必要。
- 本文は `dangerouslySetInnerHTML` で挿入するため、サニタイズ方針を別途定める必要がある。
