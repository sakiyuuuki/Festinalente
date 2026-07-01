import { getCategoryList } from "@/app/libs/microcms";
import { renderIcon } from "@/app/libs/categoryIcons";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export function generateMetadata(): Metadata {
  return {
    title: "アウトプット",
    description: "Festina Lente の学習アウトプット一覧です。",
    openGraph: {
      title: "アウトプット",
      description: "Festina Lente の学習アウトプット一覧です。",
    },
  };
}

export default async function CategoriesPage() {
  const data = await getCategoryList({
    limit: 100,
    orders: "createdAt",
  });

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>アウトプット</h1>
        <p className={styles.description}>
          学習した内容を分野ごとに整理しています。
        </p>
      </header>
      <ul className={styles.grid}>
        {data.contents.map((category) => (
          <li key={category.id}>
            <Link
              className={styles.card}
              href={`/categories/${category.slug}`}
            >
              <span className={styles.icon}>
                {renderIcon(category.icon, {
                  "aria-hidden": true,
                  size: 32,
                })}
              </span>
              <span className={styles.cardTitle}>{category.name}</span>
              <span className={styles.cardText}>{category.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
