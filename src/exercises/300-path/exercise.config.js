import createExercise from '../../createExercise';
export default createExercise(module, {
  legacy: false,
});



export default {
  // legacy: false,
  // type: 'modular',
  type: 'module',
  tags: ['es6'],
  entry: './index.js',
  doc: './README.md',
  sources: ['./index.js', './main.js', './hint.js']
};

import main from './main';
export default createExercise({
  name: 'path',
  description: '',
  type: 'module',
  tags: ['es6'],
  doc: './README.md',
  sources: ['./main.js', './hint.js']
}, () => {
  main();
});

export default {
  type: 'module',
  tags: ['es6'],
  entry: require('./index'),
  doc: require('raw!./README.md'),
  sources: [
    require('raw!./index.js'),
    require('raw!./main.js'),
    require('raw!./hint.js')
  ]
};
