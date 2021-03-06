import { assert } from 'jw-test-utils';
import { ModulePathResolver } from 'jw-path-resolver';

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
