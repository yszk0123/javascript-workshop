import { createExercise } from 'jw-exercise';
import { runTest } from '../../common/test-utils';
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
  doc: './README.md',
  sources: ['./main.js', './hint.js']
}, () => {
  runTest(main);
});
