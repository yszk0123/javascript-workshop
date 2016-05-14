// アプリの状態を扱う
class Model {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count = this.count + 1;
  }
}

// 他のモジュールから Model を参照できるようにする
export default Model;
