import type { Category } from "@/app/libs/microcms";
import styles from "./index.module.css";

type Props = {
  category?: Category | null;
};

export default function Category({ category }: Props) {
  if (!category) {
    return null;
  }

  return <span className={styles.tag}>{category.name}</span>;
}
