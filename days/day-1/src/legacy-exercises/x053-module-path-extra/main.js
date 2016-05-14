(function(namespace) {
  'use strict';
  var assert = namespace.TestUtils.assert;
  var ModulePathResolver = namespace.ModulePathResolver;

  var modulePathResolver = new ModulePathResolver({
    currentDirectory: '/users/foo/my-project/src',
    packageRootDirectory: '/users/foo/my-project'
  });

  assert.ok(modulePathResolver.resolve('?') === '/users/foo/my-project/node_modules/awesome-package', 'Q1');
  assert.ok(modulePathResolver.resolve('?') === '/users/foo/my-project/node_modules/awesome-package/function', 'Q2');
})(window.JavaScriptWorkshop);
