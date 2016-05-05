"use strict";
var globby = require("globby");
var fs = require("fs");

var Extractor = require("../utils/Extractor");

var titleExtractor = new Extractor()
  .addRule(/([^\/]+)\/index\.html$/, (_, title) => title)
  .addRule(/\/(.+)\.html$/, (_, title) => title);

module.exports = globby
  .sync("*/index.html", { cwd: "./src/exercises" })
  .sort()
  .map(function(filePath) {
    var dir = filePath.replace(/\/index.html$/, "");
    var title = titleExtractor.execute(filePath);

    return {
      title: title,
      path: title,
      absolutePath: "/exercises/" + title,
      absoluteFilePath: "/exercises/" + filePath,
      filePath: filePath,
      content: fs.readFileSync("./src/exercises/" + dir + "/README.md", "utf8")
    };
  });
