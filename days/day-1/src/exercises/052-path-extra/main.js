(function(namespace) {
  "use strict";
  var assert = namespace.TestUtils.assert;
  var PathResolver = namespace.PathResolver;
  var ModulePathResolver = namespace.ModulePathResolver;

  var pathResolver = new PathResolver({
    currentDirectory: "/a/b/c",
  });

  assert.ok(pathResolver.resolve("?") === "/a/b/c/foo.txt", "Q1");
  assert.ok(pathResolver.resolve("?") === "/a/foo.txt", "Q2");
  assert.ok(pathResolver.resolve("?") === "/a/b/d/bar.txt", "Q3");

  var modulePathResolver = new ModulePathResolver({
    currentDirectory: "/users/foo/my-project/src",
    packageRootDirectory: "/users/foo/my-project"
  });

  assert.ok(modulePathResolver.resolve("?") === "/users/foo/my-project/node_modules/awesome-package", "Q4");
  assert.ok(modulePathResolver.resolve("?") === "/users/foo/my-project/node_modules/awesome-package/function", "Q5");
})(window.JavaScriptWorkshop);
