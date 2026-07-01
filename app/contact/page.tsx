import type { Metadata } from "next";
import styles from "@/app/static-page.module.css";

export function generateMetadata(): Metadata {
  return {
    title: "お問い合わせ",
    description: "Festina Lente へのお問い合わせページです。",
    openGraph: {
      title: "お問い合わせ",
      description: "Festina Lente へのお問い合わせページです。",
    },
  };
}

export default function ContactPage() {
  const contactFormUrl = process.env.NEXT_PUBLIC_CONTACT_FORM_URL;

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>お問い合わせ</h1>
        <p className={styles.lead}>
          ご連絡は以下のフォームからお願いいたします。
        </p>
      </header>

      {contactFormUrl ? (
        <iframe
          className={styles.iframe}
          src={contactFormUrl}
          title="お問い合わせフォーム"
        />
      ) : (
        <p className={styles.notice}>
          お問い合わせフォームは現在準備中です。管理者は
          NEXT_PUBLIC_CONTACT_FORM_URL を設定してください。
        </p>
      )}
    </main>
  );
}
