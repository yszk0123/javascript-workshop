import { describe, assert, runTest } from '../../modular-common/test-utils';
import PathResolver from '../../modular-common/PathResolver';

const resolver = new PathResolver({ currentDirectory: '/a/b/c' });

describe('演習: ? を修正する', () => {
  assert.ok(resolver.resolve('./file.js') === '?', 'Q1');
  assert.ok(resolver.resolve('../file.js') === '?', 'Q2');
  assert.ok(resolver.resolve('../../file.js') === '?', 'Q3');
});

runTest();
