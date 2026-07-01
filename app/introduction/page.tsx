import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/app/static-page.module.css";

export function generateMetadata(): Metadata {
  return {
    title: "はじめに",
    description: "Festina Lente の趣旨と読み方を紹介します。",
    openGraph: {
      title: "はじめに",
      description: "Festina Lente の趣旨と読み方を紹介します。",
    },
  };
}

export default function IntroductionPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>はじめに</h1>
        <p className={styles.lead}>
          Festina Lente は、カスタマーサクセス職の運営者がデータ分析・統計学・AI・機械学習などを学びながら、理解したことを整理して公開する技術ブログです。
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>このサイトについて</h2>
        <p className={styles.text}>
          サイト名の Festina Lente は「ゆっくり急げ」という意味です。日々の学習で得た知識を急ぎすぎず、しかし着実に使える形へ落とし込むためのアウトプット置き場として運営しています。
        </p>
        <p className={styles.text}>
          扱うテーマは、データを読むための基礎、分析に必要な SQL や Python、統計学、機械学習、業務で役立つビジネス知識です。
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>読み方</h2>
        <p className={styles.text}>
          学習分野ごとの記事は
          <Link className={styles.link} href="/categories">
            アウトプット
          </Link>
          にまとめています。興味のあるカテゴリから読み進めてください。
        </p>
      </section>
    </main>
  );
}
