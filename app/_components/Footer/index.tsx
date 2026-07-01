import Link from "next/link";
import styles from "./index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/profile">プロフィール</Link>
          </li>
          <li className={styles.item}>
            <Link href="/contact">お問い合わせ</Link>
          </li>
          <li className={styles.item}>
            <Link href="/categories">アウトプット</Link>
          </li>
          <li className={styles.item}>
            <Link href="/privacy-policy">プライバシーポリシー</Link>
          </li>
        </ul>
        <p className={styles.copyright}>
          <span lang="en" className={styles.copyrightsub}>
            ©
          </span>
          2026.Festina Lente.
        </p>
      </nav>
    </footer>
  );
}
