import { assert } from '../../modular-common/test-utils';
import ModulePathResolver from '../../modular-common/ModulePathResolver';

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
