const fs = require("fs");

const nextRoutes = require("./routes");
const nowConfig = require("./now.json");

if(!nowConfig.routes) {
  nowConfig.routes = []
}

nextRoutes.routes.forEach((route) => {
  if (nowConfig.routes.filter(e => e.src === route.regex.source).length === 0) {
    nowConfig.routes.push({
      src: route.regex.source,
      dest: route.page
    })
  }
})

fs.writeFile('now.json', JSON.stringify(nowConfig, false, 2), (err) => {
  if (err) {
    console.error(err);
    return;
  };
  console.log("now.json has been updated");
});