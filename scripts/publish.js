var ghpages = require("gh-pages");

ghpages.publish("docs/.vuepress/dist", function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("发布成功");
});
