import { assert } from '../../modular-common/test-utils';
import ModulePathResolver from '../../modular-common/ModulePathResolver';

const resolver = new ModulePathResolver({
  currentDirectory: '/users/foo/my-project/src',
  packageRootDirectory: '/users/foo/my-project'
});

assert.ok(resolver.resolve('./file.js') === '?', 'Q1');
assert.ok(resolver.resolve('awesome-package') === '?', 'Q2');
assert.ok(resolver.resolve('../node_modules/awesome-package') === '?', 'Q3');
