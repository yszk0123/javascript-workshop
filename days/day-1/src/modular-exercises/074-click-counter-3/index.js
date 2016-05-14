import document from 'global/document';

import mount from './mount';

document.addEventListener('DOMContentLoaded', function() {
  const rootElement = document.createElement('div');

  document.body.appendChild(rootElement);

  mount(undefined, rootElement);
});
