import { createExercise } from 'jw-exercise';
import { runTest } from 'jw-test-utils';
import main from './main';

if (module.hot) {
  module.hot.accept('./main', () => {
    const nextMain = require('./main');
    runTest(nextMain.default || nextMain);
  });
}

export default createExercise({
  name: 'path',
  description: '',
  type: 'module',
  tags: ['es6'],
  files: ['./README.md', './main.js', './hint.js']
}, () => {
  runTest(main);
});
