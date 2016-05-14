import document from 'global/document';

import * as App from '../../app';

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

App.mount(undefined, rootElement);
