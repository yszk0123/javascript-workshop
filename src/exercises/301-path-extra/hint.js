import { describe, assert, runTest } from '../../common/test-utils';
import PathResolver from '../../common/PathResolver';

const pathResolver = new PathResolver({
  currentDirectory: '/a/b/c'
});

describe('演習: ?を修正する', () => {
  assert.ok(pathResolver.resolve('./foo.txt') === '/a/b/c/foo.txt', 'Q1');
  assert.ok(pathResolver.resolve('../../foo.txt') === '/a/foo.txt', 'Q2');
  assert.ok(pathResolver.resolve('../d/bar.txt') === '/a/b/d/bar.txt', 'Q3');
});

runTest();
