import { describe, assert } from '../../common/test-utils';
import sayHello from './sayHello';
import { sayHello2 } from './say-hello-2';
import { sayHello2 as sayHello3 } from './say-hello-2';
import * as SayHello from './say-hello-2';

export default function main() {
  describe('import で他のモジュールで定義した関数を参照できる', () => {
    assert.ok(sayHello() === 'hello', '例1');
    assert.ok(sayHello2() === 'hello2', '例2');
    assert.fail(sayHello3() === '', '演習3');
  });

  describe('演習: SayHello 形式でsayHello2()を呼び出す', () => {
    assert.fail(SayHello.sayHello2() === 'hello2', '演習');
  });
}
