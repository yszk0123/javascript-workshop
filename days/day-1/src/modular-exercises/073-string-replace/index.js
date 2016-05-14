import document from 'global/document';

import { assert } from '../../modular-common/test-utils';

const HTML = '<ul><li class="name">{{name}}</li><li>{{age}}</li></ul>';

function renderHtml(data) {
  return HTML
    .replace('{{name}}', data.name)
    .replace('{{age}}', data.age);
}

function renderTemplate(template, data) {
  return template.replace(/\{\{([^}]*)\}\}/g, function(_, key) {
    return data[key];
  });
}

function main() {
  assert.ok('Hello, world!'.replace('world', 'Tanaka') === 'Hello, Tanaka!', '例1');

  assert.ok('Hello, {{NAME}}!'.replace('{{NAME}}', 'Tanaka') === 'Hello, Tanaka!', '例2');

  const data = { name: 'Tanaka', age: 20 };

  const renderedHtml = renderHtml(data);
  assert.ok(renderedHtml === '<ul><li class="name">Tanaka</li><li>20</li></ul>', '例3');

  const renderedHtml2 = renderTemplate(HTML, data);
  assert.ok(renderedHtml2 === '<ul><li class="name">Tanaka</li><li>20</li></ul>', '例4');

  // 演習: renderTemplate() の第１引数を修正する
  assert.shouldCorrect(renderTemplate('', data) === 'name = Tanaka, age = 20', '演習1');
}

main();
