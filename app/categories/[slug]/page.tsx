import ArticleList from "@/app/_components/ArticleList";
import { getArticleList, getCategoryList } from "@/app/libs/microcms";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import styles from "../page.module.css";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const STATIC_CATEGORY_LIMIT = 100;

export async function generateStaticParams() {
  const categories = await getAllStaticCategories();

  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return {
    title: category.name,
    description: category.description,
    openGraph: {
      title: category.name,
      description: category.description,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const articles = await getArticleList({
    filters: `category[equals]${category.id}`,
    limit: 100,
  });

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.title}>{category.name}</h1>
        <p className={styles.description}>{category.description}</p>
      </header>
      <section className={styles.articleSection}>
        <ArticleList articles={articles.contents} />
      </section>
    </main>
  );
}

async function getCategoryBySlug(slug: string) {
  const data = await getCategoryList({
    filters: `slug[equals]${slug}`,
    limit: 1,
  });

  return data.contents[0] ?? null;
}

async function getAllStaticCategories() {
  const categories: { slug: string }[] = [];
  let offset = 0;
  let totalCount = 0;

  do {
    const data = await getCategoryList({
      fields: "slug",
      limit: STATIC_CATEGORY_LIMIT,
      offset,
    });

    categories.push(
      ...data.contents.map((category) => ({ slug: category.slug }))
    );
    totalCount = data.totalCount;
    offset += STATIC_CATEGORY_LIMIT;
  } while (offset < totalCount);

  return categories;
}
