import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className={styles.LP}>
        <div>
          <h1 className={styles.LP_title}>あなたと一緒に学ぶ技術ラボ</h1>
          <p className={styles.LP_description}>
            -とあるカスタマーサクセスのブログ-
          </p>
          <Link href="#" className={styles.moreinfo}>
            もっと見る
          </Link>
        </div>
        <Image
          className={styles.LP_background_img}
          src="/LP_background_img.jpg"
          alt=""
          width={4000}
          height={1200}
        />
      </section>
    </>
  );
}
