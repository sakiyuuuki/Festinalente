import Link from "next/link";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/Article/Profile">プロフィール</Link>
          </li>
          <li className={styles.item}>
            <Link href="/Contact">お問い合わせ</Link>
          </li>
          <li className={styles.item}>
            <Link href="/Output">アウトプット</Link>
          </li>
          <li className={styles.item}>
            <Link href="/PrivacyPolicy">プライバシーポリシー</Link>
          </li>
        </ul>
        <p className={styles.copyright}>
          <span lang="en" className={styles.copyrightsub}>
            ©
          </span>
          2024.Festina Lente
        </p>
      </nav>
    </footer>
  );
}
