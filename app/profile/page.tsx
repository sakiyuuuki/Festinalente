import type { Metadata } from "next";
import styles from "@/app/static-page.module.css";

export function generateMetadata(): Metadata {
  return {
    title: "運営者について",
    description: "Festina Lente の運営者プロフィールです。",
    openGraph: {
      title: "運営者について",
      description: "Festina Lente の運営者プロフィールです。",
    },
  };
}

export default function ProfilePage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>運営者について</h1>
        <p className={styles.lead}>
          2000年生まれ。2024年より都内の企業でカスタマーサクセスとして働いています。
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>プロフィール</h2>
        <p className={styles.text}>
          専門的な知識はほとんど無い状態から、業務や学習を通じてデータ分析・統計学・AI・機械学習などを少しずつ学んでいます。
        </p>
        <p className={styles.text}>
          学んだ内容を自分の言葉で整理し、実務で使える知識として定着させるために Festina Lente を運営しています。
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>このブログで大切にしていること</h2>
        <ul className={styles.list}>
          <li>基礎的な内容を省略せず、後から読み返せる形で残すこと。</li>
          <li>実践で役立つ具体例や背景もあわせて整理すること。</li>
          <li>少しずつ挑戦しながら、学んだことを誰かの役に立つ形へ変えていくこと。</li>
        </ul>
      </section>
    </main>
  );
}
