"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

const NAV_ITEMS = [
  { href: "/", label: "ホーム", subLabel: "Home" },
  { href: "/introduction", label: "はじめに", subLabel: "Introduction" },
  { href: "/categories", label: "アウトプット", subLabel: "Output" },
  { href: "/profile", label: "運営者について", subLabel: "Profile" },
  { href: "/contact", label: "お問い合わせ", subLabel: "Contact" },
];

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeDrawer = () => setIsOpen(false);

  return (
    <div className={styles.menu}>
      <nav className={styles.nav}>
        <ul className={styles.global_nav_lists}>
          {NAV_ITEMS.map((item) => (
            <li className={styles.li} key={item.href}>
              <Link href={item.href}>
                <span className={styles.global_nav_txt}>{item.label}</span>
                <span className={styles.global_nav_subtxt}>
                  {item.subLabel}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        type="button"
        className={styles.hamburger}
        aria-label="メニューを開く"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <span />
        <span />
        <span />
      </button>
      {isOpen && (
        <>
          <button
            type="button"
            className={styles.overlay}
            aria-label="メニューを閉じる"
            onClick={closeDrawer}
          />
          <aside className={styles.drawer}>
            <div className={styles.drawerHeader}>
              <span className={styles.drawerTitle}>Menu</span>
              <button
                type="button"
                className={styles.closeButton}
                aria-label="メニューを閉じる"
                onClick={closeDrawer}
              >
                ×
              </button>
            </div>
            <nav aria-label="モバイルナビゲーション">
              <ul className={styles.drawerList}>
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={styles.drawerLink}
                      onClick={closeDrawer}
                    >
                      <span className={styles.drawerLinkText}>
                        {item.label}
                      </span>
                      <span className={styles.drawerLinkSubText}>
                        {item.subLabel}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </>
      )}
    </div>
  );
}
