# Festina Lente

カスタマーサクセス職の運営者が、データ分析・統計学・AI・機械学習などの学習内容を
アウトプットする個人技術ブログ。このコンテキストは、その公開サイト全体を指す。

## Language

**Article**:
運営者が公開する学習アウトプットのコンテンツ1件。型名・endpoint・URL はすべてこの語に揃える
（型 `Article` / endpoint `articles` / URL `/articles/[id]`）。
_Avoid_: News, ブログ, ポスト, Post, 記事（英語識別子としては Article を使う）

**Category**:
Article が属する学習分野。Output に並ぶ分類
（HTML/CSS/JS・SQL・Python・機械学習・統計学・ビジネス）を指す。
_Avoid_: タグ, ジャンル, 分野（英語識別子としては Category を使う）

**Output**:
学習 Article のアーカイブ全体を指す呼称であり、その入口ページ（`/categories`）。
ナビ・フッターの「アウトプット」はすべてここを指す。
_Avoid_: ブログ一覧, 記事一覧, アーカイブ（UIラベルは「アウトプット」で統一）

**Introduction**:
サイトそのものの趣旨・読み方を紹介するページ（`/introduction`、UIラベル「はじめに」）。
運営者個人ではなく **サイト** を説明するもので、Profile とは役割が異なる。
_Avoid_: About（Introduction は対象がサイト、About/Profile は対象が運営者）

**Profile**:
運営者（人物）の経歴・人となりを紹介するページ（`/profile`、UIラベル「運営者について」）。
旧 `/Aboutus` と `/Article/Profile` はこの1ページに統合する。
_Avoid_: Aboutus, About us（運営者は1名のため "us" は使わない）
