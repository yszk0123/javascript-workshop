// TODO: Add more examples
import { describe, assert } from '../../modular-common/test-utils';
import sayHello from './sayHello';
import { sayHello2 } from './say-hello-2';

export default function main() {
  describe('import で他のモジュールで定義した関数を参照できる', () => {
    sayHello();
    sayHello2();
    assert.ok(false, '確認したらtrueに変える');
  });
}
