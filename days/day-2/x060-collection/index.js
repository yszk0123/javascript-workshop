/* eslint-disable no-console, arrow-body-style */
import { assert } from '../../common/test-utils';

function testForStatement() {
  console.group('for statement');
  const items = [10, 20, 30];
  let i;

  for (i = 0; i < items.length; i = i + 1) {
    console.log(`items[${i}] = ${items[i]}`);
  }

  // 演習: for 文を使って各配列要素を10倍した配列を作る
  const newItems = [];
  // <ここで何かやる>
  assert.similar(newItems, [100, 200, 300], '演習');

  console.groupEnd();
}

function testCollection() {
  console.group('collection');
  const items = [10, 20, 30];

  items.forEach((item, index) => {
    console.log(`items[${index}] = ${item}`);
  });

  // 演習: map を使って各配列要素を10倍した配列を作る
  const newItems = items.map((item, _index) => {
    // <ここで何かやる>
    return null;
  });
  assert.similar(newItems, [100, 200, 300], '演習');

  console.groupEnd();
}

testForStatement();
testCollection();
