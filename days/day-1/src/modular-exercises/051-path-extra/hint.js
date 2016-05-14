import { assert } from '../../modular-common/test-utils';
import PathResolver from '../../modular-common/PathResolver';

const pathResolver = new PathResolver({
  currentDirectory: '/a/b/c'
});

assert.ok(pathResolver.resolve('./foo.txt') === '/a/b/c/foo.txt', 'Q1');
assert.ok(pathResolver.resolve('../../foo.txt') === '/a/foo.txt', 'Q2');
assert.ok(pathResolver.resolve('../d/bar.txt') === '/a/b/d/bar.txt', 'Q3');
