import { assert } from '../../common/test-utils';

// たい焼きの「型」
class Taiyaki {
  // たい焼きの初期状態を設定する
  constructor() {
    this._an = 100;
  }

  // たい焼きの動作を定義する (1)
  eat() {
    this._an = this._an - 1;
  }

  // たい焼きの動作を定義する (2)
  getAn() {
    return this._an;
  }
}

// たい焼きの「型」からたい焼きの「実体」を作る
const taiyakiA = new Taiyaki();
const taiyakiB = new Taiyaki();

// どちらのたい焼きも初期状態(餡の量 100)
assert.ok(taiyakiA.getAn() === 100, '例1');
assert.ok(taiyakiB.getAn() === 100, '例2');

// taiyakiB を少し食べる
taiyakiB.eat();

// taiyakiB の状態(餡の量) が変わる
// taiyakiA の状態は変わっていない
assert.ok(taiyakiA.getAn() === 100, '例3');
assert.ok(taiyakiB.getAn() === 99, '例4');

// 演習: コメントを外した時の挙動を予想する
// Taiyaki 自体には実体がないので、餡もなければ食べることも出来ない
// Taiyaki.eat();
// assert.ok(Taiyaki.getAn() === 99);
