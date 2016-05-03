class Compiler {
  constructor() {
    this._errors = [];
  }

  execute() {
    // Do something
    // this._errors.push(...);
  }

  // execute() 以降に呼び出さないと取得できない
  getErrors() {
    return this._errors;
  }
}
