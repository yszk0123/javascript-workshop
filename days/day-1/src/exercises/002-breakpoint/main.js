(function() {
  'use strict';
  var x = 0;

  // 演習: 以下のすべての式・文にブレークポイントを設定した上で再実行する

  x = x + 1;
  x = x + 1;
  x = x + 1;

  // 演習: ログが表示されるのは、ブレークポイントで止まる前か後か確認する
  console.log('count: ' + x);

  x = x + 1;
  x = x + 1;
  x = x + 1;
})();
