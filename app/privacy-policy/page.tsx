import type { Metadata } from "next";
import Link from "next/link";
import styles from "@/app/static-page.module.css";

export function generateMetadata(): Metadata {
  return {
    title: "プライバシーポリシー",
    description: "Festina Lente のプライバシーポリシーです。",
    openGraph: {
      title: "プライバシーポリシー",
      description: "Festina Lente のプライバシーポリシーです。",
    },
  };
}

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>プライバシーポリシー</h1>
        <p className={styles.lead}>
          Festina Lente は、個人情報の重要性を認識し、適切な管理と保護に努めます。
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>個人情報の利用目的</h2>
        <p className={styles.text}>
          お問い合わせ時に取得した氏名、メールアドレス、本文などの情報は、回答や必要な連絡のために利用します。
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>個人情報の第三者提供</h2>
        <p className={styles.text}>
          法令に基づく場合を除き、本人の同意なく個人情報を第三者へ提供することはありません。
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>アクセス解析ツールについて</h2>
        <p className={styles.text}>
          本サイトでは、利用状況の把握や改善のためにアクセス解析ツールを利用する場合があります。取得される情報は匿名で収集され、個人を特定するものではありません。
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>広告配信について</h2>
        <p className={styles.text}>
          本サイトでは、第三者配信の広告サービスを利用する場合があります。広告配信事業者は、利用者の興味に応じた広告を表示するため Cookie を使用することがあります。
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>免責事項</h2>
        <p className={styles.text}>
          本サイトの掲載内容について、できる限り正確な情報を提供するよう努めますが、正確性や安全性を保証するものではありません。本サイトの情報により生じた損害等について、責任を負いかねます。
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>お問い合わせ</h2>
        <p className={styles.text}>
          本ポリシーに関するお問い合わせは
          <Link className={styles.link} href="/contact">
            お問い合わせ
          </Link>
          からお願いいたします。
        </p>
      </section>
    </main>
  );
}
