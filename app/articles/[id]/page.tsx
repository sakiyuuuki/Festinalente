import Category from "@/app/_components/Category";
import Date from "@/app/_components/Date";
import Toc from "@/app/_components/Toc";
import { getArticleDetail, getArticleList } from "@/app/libs/microcms";
import { renderContent } from "@/app/libs/renderContent";
import { draftMode } from "next/headers";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import Image from "next/image";
import styles from "./page.module.css";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
  searchParams?: Promise<{
    dk?: string | string[];
    draftKey?: string | string[];
  }>;
};

const STATIC_ARTICLE_LIMIT = 100;

export async function generateStaticParams() {
  const articles = await getAllStaticArticles();

  return articles.map((article) => ({
    id: article.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const article = await fetchArticle(id);

  if (!article) {
    notFound();
  }

  const description = article.description;

  return {
    title: article.title,
    description,
    openGraph: {
      title: article.title,
      description,
      type: "article",
      publishedTime: article.publishedAt ?? article.createdAt,
      images: article.thumbnail
        ? [
            {
              url: article.thumbnail.url,
              width: article.thumbnail.width,
              height: article.thumbnail.height,
              alt: article.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function ArticlePage({ params, searchParams }: PageProps) {
  const { id } = await params;
  const resolvedSearchParams = await searchParams;
  const isDraftMode = (await draftMode()).isEnabled;
  const draftKey = getDraftKey(resolvedSearchParams);

  if (isDraftMode) {
    noStore();
  }

  const article = await fetchArticle(
    id,
    isDraftMode && draftKey ? { draftKey } : undefined
  );

  if (!article) {
    notFound();
  }

  const publishedDate = article.publishedAt ?? article.createdAt;
  const { html, toc } = await renderContent(article.content);

  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <header className={styles.header}>
          <Category category={article.category} />
          <h1 className={styles.title}>{article.title}</h1>
          <div className={styles.meta}>
            <Date date={publishedDate} />
          </div>
          {article.thumbnail ? (
            <Image
              className={styles.thumbnail}
              src={article.thumbnail.url}
              alt=""
              width={article.thumbnail.width}
              height={article.thumbnail.height}
              priority
            />
          ) : (
            <div
              className={styles.thumbnailPlaceholder}
              aria-hidden="true"
            />
          )}
        </header>
        <div className={styles.layout}>
          <div
            className={styles.body}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <aside className={styles.toc}>
            <Toc toc={toc} />
          </aside>
        </div>
      </article>
    </main>
  );
}

async function fetchArticle(id: string, queries?: { draftKey: string }) {
  try {
    return await getArticleDetail(id, queries);
  } catch {
    return null;
  }
}

async function getAllStaticArticles() {
  const articles: { id: string }[] = [];
  let offset = 0;
  let totalCount = 0;

  do {
    const data = await getArticleList({
      fields: "id",
      limit: STATIC_ARTICLE_LIMIT,
      offset,
    });

    articles.push(...data.contents.map((article) => ({ id: article.id })));
    totalCount = data.totalCount;
    offset += STATIC_ARTICLE_LIMIT;
  } while (offset < totalCount);

  return articles;
}

function getDraftKey(searchParams: Awaited<PageProps["searchParams"]>) {
  const draftKey = searchParams?.draftKey ?? searchParams?.dk;

  if (Array.isArray(draftKey)) {
    return draftKey[0];
  }

  return draftKey;
}
