import styles from "./page.module.css";

export default function ArticleLoading() {
  return (
    <main className={styles.state}>
      <h1 className={styles.stateTitle}>Article を読み込んでいます</h1>
      <p className={styles.stateText}>本文を整えています。</p>
    </main>
  );
}
