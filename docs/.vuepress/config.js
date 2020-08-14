module.exports = {
  base: "/easyabp.io/",
  title: "EasyAbp", // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: "", // meta 中的描述文字，用于SEO
  //注入到当前页面的 HTML <head> 中的标签
  head: [["link", { rel: "icon", href: "/icon.png" }]],
  themeConfig: {
    logo: "/icon.png", //网页顶端导航栏左上角的图标
    //   顶部导航栏
    nav: [
      // 格式二：添加下拉菜单，link指向的文件路径
      { text: "Github", link: "https://github.com/EasyAbp" },
    ],
    // 侧边栏导航：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
    sidebar: {},
  },
};
