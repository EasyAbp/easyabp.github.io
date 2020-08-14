module.exports = {
  title: "EasyAbp",
  description:
    "An open source organization to enhance your ABP project development efficiency.",
  head: [["link", { rel: "icon", href: "/icon.png" }]],
  themeConfig: {
    search: false,
    logo: "/icon.png",
    nav: [
      {
        text: "AbpHelper", //默认显示
        link: "/abphelper",
      },
      {
        text: "Documents", //默认显示
        link: "https://docs.easyabp.io",
        target: "_self",
      },
      {
        text: "Modules", //默认显示
        ariaLabel: "Modules", //用于识别的label
        items: [
          {
            text: "Samples",
            link: "https://samples.easyabp.io",
            target: "_self",
          },
          {
            text: "Repo",
            link: "https://github.com/EasyAbp/EasyAbpGuide#modules",
            target: "_self",
          },
        ],
      },
      { text: "ABP Framework", link: "https://abp.io/" },
    ],
  },
};
