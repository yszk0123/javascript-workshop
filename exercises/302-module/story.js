import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { runTest } from 'jw-test-utils';
import { Markdown, SyntaxHighlight } from 'jw-ui';
import main from './main';
import mainText from '!raw!./main.js';
import sayHello2Text from '!raw!./say-hello-2.js';
import sayHelloText from '!raw!./sayHello.js';
import readmeText from '!raw!./README.md';

storiesOf('302 Module', module)
  .add('説明', () => <Markdown value={readmeText} />)
  .add('main.js', () => <SyntaxHighlight value={mainText} />)
  .add('sayHello.js', () => <SyntaxHighlight value={sayHelloText} />)
  .add('say-hello-2.js', () => <SyntaxHighlight value={sayHello2Text} />)
  .add('演習', () => runTest(main))
