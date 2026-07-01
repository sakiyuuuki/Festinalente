import Link from "next/link";
import styles from "../page.module.css";

export default function CategoryNotFound() {
  return (
    <main className={styles.state}>
      <h1 className={styles.stateTitle}>カテゴリが見つかりません</h1>
      <p className={styles.stateText}>
        公開が終了したか、URL が変更された可能性があります。
      </p>
      <Link className={styles.stateLink} href="/categories">
        アウトプットへ戻る
      </Link>
    </main>
  );
}
