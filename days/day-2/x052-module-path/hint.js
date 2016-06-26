import { assert } from '../../common/test-utils';
import ModulePathResolver from '../../common/ModulePathResolver';

const resolver = new ModulePathResolver({
  currentDirectory: '/users/foo/my-project/src',
  packageRootDirectory: '/users/foo/my-project'
});

assert.ok(resolver.resolve('./file.js') === '/users/foo/my-project/src/file.js');
assert.ok(
  resolver.resolve('awesome-package') === '/users/foo/my-project/node_modules/awesome-package'
);
assert.ok(
  resolver.resolve('../node_modules/awesome-package') ===
  '/users/foo/my-project/node_modules/awesome-package'
);
