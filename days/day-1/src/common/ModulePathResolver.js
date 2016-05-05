(function(namespace) {
  "use strict";

  var MODULE_ROOT_DIR = "node_modules";

  class ModulePathResolver {
    constructor(options) {
      options = options || {};
      this.currentDirectory = options.currentDirectory;
      this.packageRootDirectory = options.packageRootDirectory;
    }

    resolve(pathString) {
      var packageRootPath = this.packageRootDirectory.split("/");
      var prefixPath = this.currentDirectory.split("/");
      var postfixPath = [];
      var path = pathString.split("/");

      if (path[0] && path[0][0] !== ".") {
        prefixPath = packageRootPath.concat(MODULE_ROOT_DIR);
      }

      path.forEach(function(pathFragment) {
        if (pathFragment === "") {
          prefixPath = [""];
          return;
        }

        if (pathFragment === ".") {
          return;
        }

        if (pathFragment === "..") {
          if (!prefixPath.length) {
            throw new Error("reach the root directory");
          }

          prefixPath.pop();
          return;
        }

        postfixPath.push(pathFragment);
      });

      return prefixPath.concat(postfixPath).join("/");
    }
  }

  namespace.ModulePathResolver = ModulePathResolver;
})(window.JavaScriptWorkshop);
