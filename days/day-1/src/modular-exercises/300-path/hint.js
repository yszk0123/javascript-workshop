import { describe, assert, runTest } from '../../modular-common/test-utils';
import PathResolver from '../../modular-common/PathResolver';

const resolver = new PathResolver({ currentDirectory: '/a/b/c' });

describe('相対パス', () => {
  assert.ok(resolver.resolve('./file.js') === '/a/b/c/file.js');
  assert.ok(resolver.resolve('../file.js') === '/a/b/file.js');
  assert.ok(resolver.resolve('../../file.js') === '/a/file.js');
});

runTest();
