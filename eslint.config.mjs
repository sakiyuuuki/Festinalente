import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

// ESLint 9 flat config。旧 .eslintrc.json の "extends": "next/core-web-vitals" を移植したもの。
const config = [
  {
    ignores: [".next/**", "node_modules/**", "out/**"],
  },
  ...nextCoreWebVitals,
];

export default config;
