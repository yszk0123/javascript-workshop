(function(namespace) {
  "use strict";
  var assert = namespace.TestUtils.assert;
  var PathResolver = namespace.PathResolver;

  var resolver = new PathResolver({ currentDirectory: "/a/b/c" });

  assert.ok(resolver.resolve("./file.js") === "?", "Q1");
  assert.ok(resolver.resolve("../file.js") === "?", "Q2");
  assert.ok(resolver.resolve("../../file.js") === "?", "Q3");
})(window.JavaScriptWorkshop);
