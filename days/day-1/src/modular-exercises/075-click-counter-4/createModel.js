// アプリの状態を扱う
function createModel() {
  const model = {
    count: 0,
    increment() {
      model.count = model.count + 1;
    }
  };

  return model;
}

// 他のモジュールから createModel を参照できるようにする
export default createModel;
