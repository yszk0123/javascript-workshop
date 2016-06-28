import { describe, assert } from 'jw-test-utils';

export default function privateExample() {
  // 外側から参照できるのは return で返したものだけ
  function createUser(firstname, lastname) {
    // 外側から参照できない
    function getFullname() {
      return firstname + ' ' + lastname;
    }

    // 外側から参照できる
    function sayHello() {
      return 'Hello, my name is ' + getFullname();
    }

    return {
      sayHello: sayHello
    };
  }

  describe('private な関数を作ることができる', () => {
    const user = createUser('Taro', 'Tanaka');

    assert.ok(
      user.sayHello() === 'Hello, my name is Taro Tanaka',
      'sayHello は外部から参照できる'
    );

    assert.throws(() => {
      user.getFullname() === 'Taro Tanaka';
    }, 'getFullname は外部から参照できない');
  });
}
