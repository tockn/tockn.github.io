export interface ExternalPost {
  title: string;
  url: string;
  date: string;
  platform: "zenn" | "qiita" | "speakerdeck";
  tags: string[];
}

export const externalPosts: ExternalPost[] = [
  {
    title: "生SQLに型を手書きする時代は終わり？Prismaの新機能「TypedSQL」",
    url: "https://zenn.dev/tockn/articles/0e6eac6220e072",
    date: "2024-08-28",
    platform: "zenn",
    tags: ["Prisma", "TypeScript"],
  },
  {
    title: "Prisma ORMを2年運用して培ったノウハウを共有する",
    url: "https://speakerdeck.com/tockn/prisma-ormwo2nian-yun-yong-sitepei-tutanouhauwogong-you-suru",
    date: "2024-05-10",
    platform: "speakerdeck",
    tags: ["Prisma", "TypeScript"],
  },
  {
    title: "Prisma ORMを使いこなす ~歴史と対RDB運用の知見を添えて~",
    url: "https://zenn.dev/cloudbase/articles/65b9f6e4f9ae05",
    date: "2024-02-13",
    platform: "zenn",
    tags: ["Prisma", "TypeScript", "DB"],
  },
  {
    title: "Goクイズ 〜Named return valuesについて〜",
    url: "https://zenn.dev/tockn/articles/d084efe066b770",
    date: "2020-12-23",
    platform: "zenn",
    tags: ["Go"],
  },
  {
    title: "「トランザクション張っておけば大丈夫」と思ってませんか？ バグの温床になる、よくある実装パターン",
    url: "https://zenn.dev/tockn/articles/4268398c8ec9a9",
    date: "2020-12-19",
    platform: "zenn",
    tags: ["DB", "Go"],
  },
  {
    title: "左手骨折したので右手専用キーボードを自作した話",
    url: "https://qiita.com/tockn/items/1fe61be9f7479f1f1d1c",
    date: "2020-04-01",
    platform: "qiita",
    tags: ["自作キーボード"],
  },
  {
    title: "リリースまで至らなかった個人開発サービスのコードを全公開して反省してみる【Nuxt + Go】",
    url: "https://qiita.com/tockn/items/37e49c6e37cf0b89bd5b",
    date: "2019-12-05",
    platform: "qiita",
    tags: ["Go", "Nuxt", "DDD"],
  },
  {
    title: "【Go】ginでgothを使ってチョー簡単にOAuth認証",
    url: "https://qiita.com/tockn/items/44c01aa10c8038f58f02",
    date: "2019-02-22",
    platform: "qiita",
    tags: ["Go", "OAuth"],
  },
  {
    title: "Vue.js ディレクトリ構成 色々試してみた",
    url: "https://qiita.com/tockn/items/2ce68b99e0839df52200",
    date: "2018-12-15",
    platform: "qiita",
    tags: ["Vue.js", "Vuex"],
  },
];
