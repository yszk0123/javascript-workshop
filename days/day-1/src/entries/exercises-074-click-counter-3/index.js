import document from 'global/document';

import * as Exercise from '../../exercises/074-click-counter-3';

const rootElement = document.createElement('div');

document.body.appendChild(rootElement);

Exercise.mount(undefined, rootElement);
