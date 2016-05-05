(function(namespace) {
  "use strict";
  var assert = namespace.TestUtils.assert;
  var PathResolver = namespace.PathResolver;

  var resolver = new PathResolver({ currentDirectory: "/a/b/c" });

  assert.equal(resolver.resolve("./file.js"), "?");
  assert.equal(resolver.resolve("../file.js"), "?");
  assert.equal(resolver.resolve("../../file.js"), "?");
})(window.JavaScriptWorkshop);
