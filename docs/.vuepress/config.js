module.exports = {
  theme: "antdocs",
  title: "EasyAbp",
  description: "An open source organization to enhance your ABP project development efficiency.",
  base: "/",
  head: [
    ["link", { rel: "icon", href: "/assets/logo.png" }]
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-175694260-1'
      }
    ]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "EasyAbp",
    logo: "/assets/logo.png",
    editLinks: false,
  },
};