/* eslint-disable arrow-body-style, object-shorthand, func-names */
import { describe, assert } from '../../modular-common/test-utils';

export default function main() {
  describe('テンプレート文字列', () => {
    // '...' や "..." の代わりに `...` を使う
    // ${...} の中に通常の JavaScript の式を埋め込める
    // '...' + variable + '...' のような文字列の結合を簡潔に書ける
    const name = 'world';
    assert.ok(`Hello, ${name}!` === 'Hello, world!', '例1');
  });

  describe('アロー関数', () => {
    // 以下はいずれもほぼ同じ
    const add1 = (x, y) => x + y;
    const add2 = (x, y) => { return x + y; };
    function add3(x, y) {
      return x + y;
    }

    assert.ok(add1(1, 2) === 3, '例1');
    assert.ok(add2(1, 2) === 3, '例2');
    assert.ok(add3(1, 2) === 3, '例3');
  });

  describe('オブジェクトリテラルの省略表記', () => {
    const a = 1;

    // 以下の enhanced と legacy はほぼ同等
    const enhanced = {
      a,
      add(x, y) {
        return x + y;
      }
    };

    const legacy = {
      a: a,
      add: function (x, y) {
        return x + y;
      }
    };

    assert.ok(enhanced.a === legacy.a, '例1');
    assert.ok(enhanced.add(1, 2) === legacy.add(1, 2), '例2');
  });

  describe('分割代入', () => {
    const data = { a: 1, b: 2 };

    // 以下のように書くのとほぼ同じ
    // const a = data.a;
    // const b = data.b;
    const { a, b } = data;
    assert.ok(a === data.a, '例1');
    assert.ok(b === data.b, '例2');
  });
}
