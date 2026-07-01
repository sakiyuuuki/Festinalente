import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import {
  getArticleList,
  getCategoryList,
  sortCategories,
} from "@/app/libs/microcms";
import { renderIcon } from "@/app/libs/categoryIcons";
import { TOP_ARTICLES_LIMIT } from "./constants";
import ArticleList from "@/app/_components/ArticleList";

export default async function Home() {
  const [articles, categories] = await Promise.all([
    getArticleList({
      limit: TOP_ARTICLES_LIMIT,
    }),
    getCategoryList({
      limit: 100,
    }),
  ]);

  return (
    <>
      <section className={styles.LP}>
        <div>
          <h1 className={styles.LP_title}>あなたと一緒に学ぶ技術ラボ</h1>
          <p className={styles.LP_description}>
            -とあるカスタマーサクセスのブログ-
          </p>
          <Link href="#Introduction" className={styles.moreinfo}>
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
      {/*-----Introduction section------- */}
      <main>
        <section className={styles.Introduction_container}>
          <div id="Introduction">
            <h2 className={styles.main_sections_title}>Introduction</h2>
            <hr className={styles.hr} />
            <p className={styles.Intro_description}>
              当サイトはとある企業でカスタマーサクセスとして働く新卒社会人がデータ分析・統計学・AI・機械学習などの専門的な知識を習得するためにアウトプット用として作成したサイトになります。基礎的なことはもちろん、実践的で役立つ知識を中心にブログ作成していきます。
            </p>
          </div>
        </section>
        {/*-----Output section------- */}
        <section className={styles.Output_container}>
          <div className={styles.Output_section_container}>
            <h2 className={styles.main_sections_title}>Output</h2>
            <hr className={styles.hr} />
            <h3 className={styles.Output_category}>Category</h3>

            <div className={styles.row}>
              {sortCategories(categories.contents).map((category) => (
                <div className={styles.col} key={category.id}>
                  <Link href={`/categories/${category.slug}`}>
                    <span className={styles.icon}>
                      {renderIcon(category.icon, {
                        "aria-hidden": true,
                        size: 30,
                      })}
                    </span>
                    <h3 className={styles.category_title}>{category.name}</h3>
                    <hr className={styles.hr} />
                    <p className={styles.Output_description}>
                      {category.description}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/*-----Aboutus section------- */}
        <section className={styles.Aboutus_container}>
          <div className={styles.Aboutus_description_container}>
            <h2 className={styles.main_sections_title}>運営者について</h2>
            <hr className={styles.hr} />
            <p className={styles.Aboutus_description}>
              2000年生まれ。
              <br />
              2024年より都内のとある企業でカスタマーサクセスとして働いています。専門的な知識はほとんど無く、日々新しいことをたくさん学んでいます。色んなことに挑戦しながら、少しずつ自分の力をつけていきます。少しでも私の学んだことが誰かの役に立てば幸いです。
            </p>
            <Link href="/profile">
              <p className={styles.Aboutme_moreinfo}>
                →もっと読みたいと思ってくださった方へ
              </p>
            </Link>
          </div>
          <Image
            className={styles.Aboutus_img}
            src="/桜.jpg"
            alt=""
            width={430}
            height={280}
          />
        </section>
        {/*-----News section------- */}
        <section className={styles.news_section}>
          <h2 className={styles.newsTitle}>新着記事</h2>
          <hr className={styles.news_hr} />
          <ArticleList articles={articles.contents} />
        </section>
      </main>
    </>
  );
}
