import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { runTest } from 'jw-test-utils';
import { Markdown, SyntaxHighlight } from 'jw-ui';
import readmeText from '!raw!./README.md';
import main from './main';
import mainText from '!raw!./main.js';

storiesOf('102 Equality', module)
  .add('説明', () => <Markdown value={readmeText} />)
  .add('main.js', () => <SyntaxHighlight value={mainText} />)
  .add('演習', () => runTest(main))
