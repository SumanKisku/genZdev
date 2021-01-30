module.exports = {
  siteMetadata: {
    title: "genZdev",
  },
  plugins: [
    // "gatsby-plugin-emotion",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    // "gatsby-plugin-sharp",
    // "gatsby-plugin-sitemap",
    // "gatsby-plugin-mdx",
    // "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-scroll-reveal",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
