"use client";

import Link from "next/link";
import styles from "./index.module.css";

export default function Menu() {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.global_nav_lists}>
          <li className={styles.li}>
            <Link href="/">
              <span className={styles.global_nav_txt}>ホーム</span>
              <span className={styles.global_nav_subtxt}>Home</span>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/introduction">
              <span className={styles.global_nav_txt}>はじめに</span>
              <span className={styles.global_nav_subtxt}>Introduction</span>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/categories">
              <span className={styles.global_nav_txt}>アウトプット</span>
              <span className={styles.global_nav_subtxt}>Output</span>
            </Link>
          </li>

          <li className={styles.li}>
            <Link href="/profile">
              <span className={styles.global_nav_txt}>運営者について</span>
              <span className={styles.global_nav_subtxt}>Profile</span>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/contact">
              <span className={styles.global_nav_txt}>お問い合わせ</span>
              <span className={styles.global_nav_subtxt}>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
