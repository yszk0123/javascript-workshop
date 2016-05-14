(function(namespace) {
  'use strict';
  var assert = namespace.TestUtils.assert;

  function testObject() {
    console.group('オブジェクト (Object)');

    var object = {
      id: 1,
      name: 'foo'
    };
    assert.ok(object.id === 1, '例1');
    assert.ok(object.name === 'foo', '例2');
    assert.similar(object, { id: 1, name: 'foo' }, '例3');

    // プロパティの値を書き換える
    object.name = 'bar';
    assert.similar(object, { id: 1, name: 'bar' }, '例4');

    // 新しいプロパティを追加する
    object.age = 20;
    assert.similar(object, { id: 1, name: 'bar', age: 20 }, '例5');

    // 演習: プロパティ "age" を取り除く
    // <ここで何かやる>
    assert.similar(object, { id: 1, name: 'bar' }, '演習');

    console.groupEnd();
  }

  testObject();

  function testArray() {
    console.group('配列 (Array)');

    var array = [
      100,
      true,
      'foo'
    ];
    assert.ok(array[0] === 100, '例1');
    assert.ok(array[1] === true, '例2');
    assert.ok(array[2] === 'foo', '例3');
    assert.ok(array.length === 3, '例4');

    // 一番後ろから配列要素を取り除く
    array.pop();
    assert.similar(array, [100, true], '例5');
    assert.ok(array.length === 2, '例6');

    // 一番後ろに新しい配列要素を追加する
    array.push(300);
    assert.similar(array, [100, true, 300], '例7');
    assert.ok(array.length === 3, '例8');

    array = ['That', 'is', 'a', 'pen'];

    // 演習: 一番前から配列要素を取り除く
    // <ここで何かやる>
    assert.similar(array, ['is', 'a', 'pen'], '演習1');
    assert.ok(array.length === 2, '演習2');

    // 演習: 一番前に新しい配列要素を追加する
    // <ここで何かやる>
    assert.similar(array, ['This', 'is', 'a', 'pen'], '演習3');
    assert.ok(array.length === 3, '演習4');

    console.groupEnd();
  }

  testArray();

  function testBoolean() {
    console.group('ブーリアン (Boolean)');

    assert.ok(true, '例1');
    assert.fail(false, '例2');
    assert.ok(1 < 2 === true, '例3');
    assert.ok(1 < 0 === false, '例4');
    assert.ok((1 + 1 === 2) === true, '例5');

    console.groupEnd();
  }

  testBoolean();
})(window.JavaScriptWorkshop);
