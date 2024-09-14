import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { IconContext } from "react-icons"; //IconContextをインポート
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { FaPython } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { IoBusiness } from "react-icons/io5";
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
      {/*-----Introduction section------- */}
      <main>
        <section className={styles.main_section_container}>
          <div>
            <h2 className={styles.main_sections_title}>Introduction</h2>
            <hr className={styles.hr} />
            <p className={styles.Intro_description}>
              当サイトはとある企業でカスタマーサクセスとして働く新卒社会人がデータ分析・統計学・AI・機械学習などの専門的な知識を習得するためにアウトプット用として作成したサイトになります。基礎的なことはもちろん、実践的で役立つ知識を中心にブログ作成していきます。
            </p>
          </div>
        </section>
        {/*-----Output section------- */}
        <section className={styles.Output_article}>
          <div className={styles.Output_section_container}>
            <h2 className={styles.main_sections_title}>Output</h2>
            <hr className={styles.hr} />
            <h3 className={styles.Output_category}>＜Category＞</h3>
            <div className={styles.row}>
              {/*-----Output section col 1------- */}
              <div className={styles.col}>
                <span className={styles.icon}>
                  <FaHtml5 size={30} />
                  <FaCss3Alt size={30} />
                  <IoLogoJavascript size={30} />
                </span>
                <Link href="">
                  <h3 className={styles.category_title}>HTML/CSS/JS</h3>
                </Link>
                <hr className={styles.hr} />
                <p>
                  フロント言語に関する内容を実際に学んだことをベースにまとめています。
                </p>
              </div>
              {/*-----Output section col 2------- */}
              <div className={styles.col}>
                <span className={styles.icon}>
                  <GrMysql size={30} />
                </span>
                <Link href="">
                  <h3 className={styles.category_title}>SQL</h3>
                </Link>
                <hr className={styles.hr} />
                <p>
                  SQLに関する内容を実際に学んだことをベースにまとめています。
                </p>
              </div>
              {/*-----Output section col 3------- */}
              <div className={styles.col}>
                <span className={styles.icon}>
                  <FaPython size={30} />
                </span>
                <Link href="">
                  <h3 className={styles.category_title}>Python</h3>
                </Link>
                <hr className={styles.hr} />
                <p>
                  Pythonの実用的な技法の解説・使い方もあわせて学んだことをベースにまとめています。
                </p>
              </div>
              {/*-----Output section col 4------- */}
              <div className={styles.col}>
                <span className={styles.icon}>
                  <IoSettings size={30} />
                </span>
                <Link href="">
                  <h3 className={styles.category_title}>機械学習</h3>
                </Link>
                <hr className={styles.hr} />
                <p>
                  機械学習の論理と実装に加えて、ビジネス観点から機械学習を体系的にまとめています。
                </p>
              </div>
              {/*-----Output section col 5------- */}
              <div className={styles.col}>
                <span className={styles.icon}>
                  <GoGraph size={30} />
                </span>
                <Link href="">
                  <h3 className={styles.category_title}>統計学</h3>
                </Link>
                <hr className={styles.hr} />
                <p>
                  データへの数式的な理解を深めるために役立つ分野です。統計検定2級からの内容を対象としています。
                </p>
              </div>
              {/*-----Output section col 6------- */}
              <div className={styles.col}>
                <span className={styles.icon}>
                  <IoBusiness size={30} />
                </span>
                <Link href="">
                  <h3 className={styles.category_title}>ビジネス</h3>
                </Link>
                <hr className={styles.hr} />
                <p>
                  デジタルマーケティング・業界のドメイン知識などのビジネス全般を対象としています。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
