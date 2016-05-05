(function(global) {
  "use strict";
  const document = global.document;

  global.JavaScriptWorkshop = {};

  document.addEventListener("DOMContentLoaded", function() {
    Array.prototype.slice.call(document.querySelectorAll(".Instruction"))
      .forEach(function(element) {
        element.innerHTML = element.innerHTML
          .replace(/^\s+|\s+$/g, "")
          .replace(/\r?\n\s+/g, "<br>");
      });
  });
})(window);
