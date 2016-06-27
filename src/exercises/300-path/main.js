import { describe, assert } from 'jw-test-utils';
import { PathResolver } from 'jw-path-resolver';

export default function main() {
  const resolver = new PathResolver({ currentDirectory: '/a/b/c' });

  describe('演習: ? を修正する', () => {
    assert.ok(resolver.resolve('./file.js') === '?', 'Q1');
    assert.ok(resolver.resolve('../file.js') === '?', 'Q2');
    assert.ok(resolver.resolve('../../file.js') === '?', 'Q3');
  });
}
