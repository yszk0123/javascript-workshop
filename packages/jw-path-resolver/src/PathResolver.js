export default class PathResolver {
  constructor(options = {}) {
    this.currentDirectory = options.currentDirectory;
  }

  resolve(pathString) {
    const postfixPath = [];
    const path = pathString.split('/');
    let prefixPath = this.currentDirectory.split('/');

    path.forEach((pathFragment) => {
      if (pathFragment === '') {
        prefixPath = [''];
        return;
      }

      if (pathFragment === '.') {
        return;
      }

      if (pathFragment === '..') {
        if (!prefixPath.length) {
          throw new Error('reach the root directory');
        }

        prefixPath.pop();
        return;
      }

      postfixPath.push(pathFragment);
    });

    return prefixPath.concat(postfixPath).join('/');
  }
}
