import path from 'path';
import ExerciseType from './app/ExerciseType';
import ExerciseItemType from './app/ExerciseItemType';

function extractTitle(filePath) {
  return filePath.replace(/([^\/]+)\/index\.(?:jsx?|html)$/, (_, t) => t);
}

function requireHtml(baseDir, title, { legacy }) {
  return {
    type: ExerciseItemType.Demo,
    icon: 'play-circle-o',
    originalPath: `${baseDir}/index.html`,
    absolutePath: legacy ?
      `/exercises/${title}/index.html` :
      `/assets/exercises-${title}.html`
  };
}

function requireDoc(baseDir, title, _options) {
  return {
    type: ExerciseItemType.Doc,
    icon: 'file-o',
    originalPath: `${baseDir}/README.md`,
    absolutePath: `/assets/exercises-${title}/README.md`,
    value: require(`raw!${baseDir}/README.md`)
  };
}

function requireFiles(baseDir, _title, _options) {
  const req = require.context(`raw!${baseDir}`, false, /\.(?:jsx?|css|json|html?|md)$/);

  return req.keys().map((key) => {
    const file = path.basename(key);

    return {
      type: ExerciseItemType.File,
      icon: 'file-code-o',
      originalPath: `./src/exercises/${file}`,
      absolutePath: `/assets/exercises-${file}`,
      value: req(key)
    };
  });
}

export default function createExercise(targetModule, options = { legacy: false }) {
  const baseDir = path.basedir(targetModule.filename);
  const title = extractTitle(targetModule.filename);

  return {
    type: legacy ? ExerciseType.Legacy : ExerciseType.Modular,
    tags: legacy ? ['es5'] : ['es6'],
    title,
    path: title,
    absolutePath: `/exercises/${title}`,
    files: [
      requireHtml(baseDir, title, options),
      requireDoc(baseDir, title, options),
      requireFiles(baseDir, title, options)
    ].reduce((a, b) => a.concat(b))
  };
}
