import { createClient } from "microcms-js-sdk"; /*microcmsとデータをやり取りとするためのAPIをcreateClientという*/
import type {
  /*importするのが型情報であることを示しています。*/
  /*microcms内で定義されている方の名前*/
  /*例えばクエリの構造、画像データ、リストコンテンツの形などを TypeScript で扱う際に、正しい型としてチェックするために使われます。*/
  MicroCMSQueries /*Microcmsにクエリパラメータを渡す際の型。ふぇるたリングやページングのためのパラメータを持つ*/,
  MicroCMSImage /*MicroCMSに保存されている画像データの型。画像のURLやサイズ情報を持つことがおおい */,
  MicroCMSListContent /*MicroCMSから取得したリスト形式のコンテンツデータの型。リストアイテムの構造を表す*/,
} from "microcms-js-sdk";

/*MicroCmsから取得したデータが正しい形で扱われるように、型チェックを行うためのスクリプト*/
export type Category = {
  name: string;
  slug: string;
  description: string;
  icon: string;
} & MicroCMSListContent;
/*これは、Category 型に MicroCMSListContent 型のプロパティを追加する（交差型）ことを意味します。MicroCMSListContent には、MicroCMS から取得するリスト形式のコンテンツに共通して存在する情報（例: id, createdAt, updatedAt など）が含まれています。*/

export type Article = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
  category?: Category | null;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

//Domain情報とAPIキーを取得（秘密保持性のため、.env.localファイルから取得）
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

const articlesCache = { next: { tags: ["articles"] } };
const categoriesCache = { next: { tags: ["categories"] } };

//Articlelistを取得するscript
export const getArticleList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Article>({
    endpoint: "articles",
    queries,
    customRequestInit: articlesCache,
  });
  return listData;
};

export const getArticleDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Article>({
    endpoint: "articles",
    contentId,
    queries,
    customRequestInit: articlesCache,
  });
  return detailData;
};

export const getCategoryList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Category>({
    endpoint: "categories",
    queries,
    customRequestInit: categoriesCache,
  });
  return listData;
};

export const getCategoryDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Category>({
    endpoint: "categories",
    contentId,
    queries,
    customRequestInit: categoriesCache,
  });
  return detailData;
};
