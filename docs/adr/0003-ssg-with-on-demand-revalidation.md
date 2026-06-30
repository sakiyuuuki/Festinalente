# Article/カテゴリは SSG + オンデマンド再検証で配信する

Article・カテゴリページは `generateStaticParams` で静的生成し、microCMS の Webhook から
revalidate 用 API ルートを叩いて `revalidatePath` / `revalidateTag` を実行することで、
コンテンツ更新時のみ再生成する。静的配信の速さと、公開直後に反映される鮮度を両立するため。
時間 ISR（反映ラグあり）と動的 SSR（毎リクエスト取得で低速・高負荷）を退けた。

## Consequences

- revalidate を受ける API ルート（署名検証つき）と、microCMS 側の Webhook 設定が必要。
- microCMS 取得時に `next: { tags: [...] }` を付け、タグ単位で再検証できるようにする。
- 下書きプレビュー（Draft Mode）はこの静的配信とは別経路で動的に取得する。
