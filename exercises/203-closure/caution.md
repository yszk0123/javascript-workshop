# クロージャを使用するときの注意点

## 生成コスト・メモリ消費が大きくなる

例えば下の例では、`method1`, `method2`, ... は `createUser` が呼ばれる度に生成・保持される。

```js
function createUser() {
  function method1() {...}
  function method2() {...}
  function method3() {...}
  ...
  return {
    method1: method1
  };
}

const user1 = createUser();
const user2 = createUser();
...
const userN = createUser();
```

## メモリリーク

```js
function leak() {
  const hugeObject = { ... }; // とても大きなオブジェクト

  function closure() {
    // hugeObject を参照する
  }

  return closure;
}

// この変数を参照している限り hugeObject も参照し続ける
const closureWithHugeObject = leak();
```

```js
function noLeak() {
  const hugeObject = { ... }; // とても大きなオブジェクト

  // 外側の変数を参照しないただの関数
  function func(a, b) {
    return a + b;
  }

  return func;
}

// hugeObject を参照しない
const funcWithoutHugeObject = noLeak();
```
