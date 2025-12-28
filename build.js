import fs from "fs";
import Handlebars from "handlebars";

const layout = fs.readFileSync("src/templates/layout.hbs", "utf-8");
const page = fs.readFileSync("src/templates/index.hbs", "utf-8");

const template = Handlebars.compile(layout);

const finalHtml = template({
  title: "My Website",
  body: page
});

if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

fs.writeFileSync("dist/index.html", finalHtml);

console.log("dist/index.html generated successfully");
