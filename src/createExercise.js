import path from 'path';
import ExerciseType from './ExerciseType';
import ExerciseItemType from './ExerciseItemType';

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

function requireDocs(baseDir, title, _options) {
  return req.keys().map((key) => {
    const file = path.basename(key);

    return {
      type: ExerciseItemType.Doc,
      icon: 'file-o',
      originalPath: `${baseDir}/${file}`,
      absolutePath: `/assets/exercises-${title}/${file}`,
      value: req('raw!' + key)
    };
  });
}

function requireFiles(baseDir, title, _options) {
  const req = require.context(`raw!${baseDir}`, false, /\.(?:jsx?|css|json|html?|md)$/);

  return req.keys().map((key) => {
    const file = path.basename(key);

    return {
      type: ExerciseItemType.File,
      icon: 'file-code-o',
      originalPath: `./src/exercises/${title}/${file}`,
      absolutePath: `/assets/exercises-${title}/${file}`,
      value: req(key)
    };
  });
}

export function requireExercise({ baseDir, title }) {
  return {
    type: legacy ? ExerciseType.Legacy : ExerciseType.Modular,
    tags: legacy ? ['es5'] : ['es6'],
    title,
    path: title,
    absolutePath: `/exercises/${title}`,
    files: [
      requireHtml(baseDir, title, options),
      requireDocs(baseDir, title, options),
      requireFiles(baseDir, title, options)
    ].reduce((a, b) => a.concat(b))
  };
}

export default function createExercise({ name, description, type, tags, docs, sources }, callback) {
  const baseDir = path.basedir(targetModule.filename);
  const title = extractTitle(targetModule.filename);

  return {
    title: name,
    description,
    type,
    tags,
    docs: docs.map((doc) => )


    title,
    path: title,
    absolutePath: `/exercises/${title}`,
    files: [
      requireHtml(baseDir, title, options),
      requireDocs(baseDir, title, options),
      requireFiles(baseDir, title, options)
    ].reduce((a, b) => a.concat(b))
  };
}
