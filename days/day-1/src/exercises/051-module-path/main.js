(function(namespace) {
  "use strict";
  var assert = namespace.TestUtils.assert;
  var ModulePathResolver = namespace.ModulePathResolver;

  var resolver = new ModulePathResolver({
    currentDirectory: "/users/foo/my-project/src",
    packageRootDirectory: "/users/foo/my-project"
  });

  assert.ok(resolver.resolve("./file.js") === "?", "Q1");
  assert.ok(resolver.resolve("awesome-package") === "?", "Q2");
  assert.ok(resolver.resolve("../node_modules/awesome-package") === "?", "Q3");
})(window.JavaScriptWorkshop);
