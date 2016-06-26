import { describe, assert } from '../../common/test-utils';

export default function main() {
  describe('成功例', function() {
    assert.ok(1 + 1 === 2, '例1');
  });

  describe('失敗例', function() {
    assert.ok(1 + 1 === 3, '例1');
  });

  describe('演習', function() {
    assert.fail(1 + 1 === 2, '演習1');
    assert.fail(1 + 1 !== 2, '演習2');
  });
}
