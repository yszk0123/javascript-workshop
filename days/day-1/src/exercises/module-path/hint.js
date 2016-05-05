(function(namespace) {
  "use strict";
  var assert = namespace.TestUtils.assert;
  var ModulePathResolver = namespace.ModulePathResolver;

  var resolver = new ModulePathResolver({
    currentDirectory: "/users/foo/my-project/src",
    packageRootDirectory: "/users/foo/my-project"
  });

  assert.ok(resolver.resolve("./file.js") === "/users/foo/my-project/src/file.js");
  assert.ok(resolver.resolve("awesome-package") === "/users/foo/my-project/node_modules/awesome-package");
  assert.ok(resolver.resolve("../node_modules/awesome-package") === "/users/foo/my-project/node_modules/awesome-package");
})(window.JavaScriptWorkshop);
