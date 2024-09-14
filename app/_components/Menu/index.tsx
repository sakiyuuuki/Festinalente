"use client";

import Link from "next/link";
import styles from "./index.module.css";

export default function Menu() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.global_nav_lists}>
          <li className={styles.li}>
            <Link href="/home">
              <span className={styles.global_nav_txt}>ホーム</span>
              <span className={styles.global_nav_subtxt}>Home</span>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/Introduction">
              <span className={styles.global_nav_txt}>はじめに</span>
              <span className={styles.global_nav_subtxt}>Introduction</span>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/Output">
              <span className={styles.global_nav_txt}>アウトプット</span>
              <span className={styles.global_nav_subtxt}>Output</span>
            </Link>
          </li>

          <li className={styles.li}>
            <Link href="/Reference">
              <span className={styles.global_nav_txt}>その他のブログ</span>
              <span className={styles.global_nav_subtxt}>Reference</span>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/Aboutus">
              <span className={styles.global_nav_txt}>運営者について</span>
              <span className={styles.global_nav_subtxt}>About us</span>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/Contact">
              <span className={styles.global_nav_txt}>お問い合わせ</span>
              <span className={styles.global_nav_subtxt}>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
