import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { runTest } from 'jw-test-utils';
import { Markdown, SyntaxHighlight } from 'jw-ui';
import main from './main';
import mainText from '!raw!./main.js';
import readmeText from '!raw!./README.md';

storiesOf('203 Closure', module)
  .add('説明', () => <Markdown value={readmeText} />)
  .add('main.js', () => <SyntaxHighlight value={mainText} />)
  .add('演習', () => runTest(main))
