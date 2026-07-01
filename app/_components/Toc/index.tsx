import type { TocItem } from "@/app/libs/renderContent";
import styles from "./index.module.css";

type Props = {
  toc: TocItem[];
};

type TocGroup = {
  heading: TocItem;
  children: TocItem[];
};

export default function Toc({ toc }: Props) {
  if (toc.length === 0) {
    return null;
  }

  const groups = groupToc(toc);

  return (
    <nav className={styles.nav} aria-label="目次">
      <h2 className={styles.title}>目次</h2>
      <ol className={styles.list}>
        {groups.map((group) => (
          <li key={group.heading.id} className={styles.item}>
            <a className={styles.link} href={`#${group.heading.id}`}>
              {group.heading.text}
            </a>
            {group.children.length > 0 ? (
              <ol className={styles.childList}>
                {group.children.map((child) => (
                  <li key={child.id} className={styles.childItem}>
                    <a className={styles.link} href={`#${child.id}`}>
                      {child.text}
                    </a>
                  </li>
                ))}
              </ol>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function groupToc(toc: TocItem[]): TocGroup[] {
  const groups: TocGroup[] = [];

  for (const item of toc) {
    if (item.depth === 2 || groups.length === 0) {
      groups.push({ heading: item, children: [] });
      continue;
    }

    groups[groups.length - 1].children.push(item);
  }

  return groups;
}
