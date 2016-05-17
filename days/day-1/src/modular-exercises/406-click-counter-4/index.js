import document from 'global/document';

import mount from './mount';
import '../../modular-common/style.css';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.createElement('div');

  document.body.appendChild(rootElement);

  mount(undefined, rootElement);
});
