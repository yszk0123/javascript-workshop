import document from 'global/document';
import { mount } from 'jw-app';

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

mount(undefined, rootElement);
