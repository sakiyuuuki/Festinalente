import Link from "next/link";
import styles from "./page.module.css";

export default function ArticleNotFound() {
  return (
    <main className={styles.state}>
      <h1 className={styles.stateTitle}>Article が見つかりません</h1>
      <p className={styles.stateText}>
        公開が終了したか、URL が変更された可能性があります。
      </p>
      <Link className={styles.stateLink} href="/categories">
        アウトプットへ戻る
      </Link>
    </main>
  );
}
