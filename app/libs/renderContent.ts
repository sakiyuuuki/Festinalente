import "server-only";

import rehypeShiki from "@shikijs/rehype";
import type { Element, Nodes, Root } from "hast";
import { toText } from "hast-util-to-text";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeParse from "rehype-parse";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import type { BuiltinLanguage } from "shiki";
import { unified } from "unified";

export type TocItem = {
  depth: 2 | 3;
  id: string;
  text: string;
};

type RenderedContent = {
  html: string;
  toc: TocItem[];
};

const shikiLanguages: BuiltinLanguage[] = [
  "js",
  "ts",
  "jsx",
  "tsx",
  "python",
  "sql",
  "bash",
  "json",
  "css",
  "html",
];

const extendedAttributes = {
  ...defaultSchema.attributes,
  h1: [...(defaultSchema.attributes?.h1 ?? []), "id"],
  h2: [...(defaultSchema.attributes?.h2 ?? []), "id"],
  h3: [...(defaultSchema.attributes?.h3 ?? []), "id"],
  h4: [...(defaultSchema.attributes?.h4 ?? []), "id"],
  h5: [...(defaultSchema.attributes?.h5 ?? []), "id"],
  h6: [...(defaultSchema.attributes?.h6 ?? []), "id"],
  pre: [...(defaultSchema.attributes?.pre ?? []), "className", "style"],
  code: [...(defaultSchema.attributes?.code ?? []), "className", "style"],
  span: [...(defaultSchema.attributes?.span ?? []), "className", "style"],
};

const sanitizeSchema = {
  ...defaultSchema,
  attributes: extendedAttributes,
};

const processor = unified()
  .use(rehypeParse, { fragment: true })
  .use(rehypeSanitize, sanitizeSchema)
  .use(rehypeSlug)
  .use(rehypeAutolinkHeadings, { behavior: "wrap" })
  .use(rehypeShiki, {
    theme: "github-dark",
    langs: shikiLanguages,
  })
  .use(rehypeStringify);

export async function renderContent(content: string): Promise<RenderedContent> {
  const tree = processor.parse(content);
  const transformedTree = await processor.run(tree);

  return {
    html: processor.stringify(transformedTree),
    toc: extractToc(transformedTree),
  };
}

function extractToc(tree: Root): TocItem[] {
  const toc: TocItem[] = [];

  visitElements(tree.children, (node) => {
    if (node.tagName !== "h2" && node.tagName !== "h3") {
      return;
    }

    const id = getStringProperty(node, "id");
    const text = toText(node).trim();

    if (!id || !text) {
      return;
    }

    toc.push({
      depth: node.tagName === "h2" ? 2 : 3,
      id,
      text,
    });
  });

  return toc;
}

function visitElements(
  nodes: readonly Nodes[],
  callback: (node: Element) => void
) {
  for (const node of nodes) {
    if (!isElement(node)) {
      continue;
    }

    callback(node);
    visitElements(node.children, callback);
  }
}

function isElement(node: Nodes): node is Element {
  return node.type === "element";
}

function getStringProperty(node: Element, propertyName: string) {
  const value = node.properties[propertyName];

  if (typeof value === "string") {
    return value;
  }

  return undefined;
}
