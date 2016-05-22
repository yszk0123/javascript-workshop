const MODULE_ROOT_DIR = 'node_modules';

export default class ModulePathResolver {
  constructor(options = {}) {
    this.currentDirectory = options.currentDirectory;
    this.packageRootDirectory = options.packageRootDirectory;
  }

  resolve(pathString) {
    const packageRootPath = this.packageRootDirectory.split('/');
    const postfixPath = [];
    const path = pathString.split('/');
    let prefixPath = this.currentDirectory.split('/');

    if (path[0] && path[0][0] !== '.') {
      prefixPath = packageRootPath.concat(MODULE_ROOT_DIR);
    }

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
