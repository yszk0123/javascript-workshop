(function(namespace) {
  'use strict';
  var assert = namespace.TestUtils.assert;
  var ModulePathResolver = namespace.ModulePathResolver;

  var modulePathResolver = new ModulePathResolver({
    currentDirectory: '/users/foo/my-project/src',
    packageRootDirectory: '/users/foo/my-project'
  });

  assert.ok(modulePathResolver.resolve('awesome-package') === '/users/foo/my-project/node_modules/awesome-package', 'H1');
  assert.ok(modulePathResolver.resolve('awesome-package/function') === '/users/foo/my-project/node_modules/awesome-package/function', 'H2');
})(window.JavaScriptWorkshop);
