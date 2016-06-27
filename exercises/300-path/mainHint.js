import { describe, assert } from 'jw-test-utils';
import { PathResolver } from 'jw-path-resolver';

export default function mainHint() {
  const resolver = new PathResolver({ currentDirectory: '/a/b/c' });

  describe('相対パス', () => {
    assert.ok(resolver.resolve('./file.js') === '/a/b/c/file.js');
    assert.ok(resolver.resolve('../file.js') === '/a/b/file.js');
    assert.ok(resolver.resolve('../../file.js') === '/a/file.js');
  });
}
