import { assert } from 'jw-test-utils';
import { ModulePathResolver } from 'jw-path-resolver';

const modulePathResolver = new ModulePathResolver({
  currentDirectory: '/users/foo/my-project/src',
  packageRootDirectory: '/users/foo/my-project'
});

assert.ok(
  modulePathResolver.resolve('?') ===
  '/users/foo/my-project/node_modules/awesome-package',
  'Q1'
);
assert.ok(
  modulePathResolver.resolve('?') ===
  '/users/foo/my-project/node_modules/awesome-package/function',
  'Q2'
);
