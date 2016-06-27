import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { runTest } from 'jw-test-utils';
import { Markdown, SyntaxHighlight } from 'jw-ui';
import main from './main';
import mainText from '!raw!./main.js';
import hintText from '!raw!./hint.js';
import readmeText from '!raw!./README.md';

storiesOf('301 Path Extra', module)
  .add('説明', () => <Markdown value={readmeText} />)
  .add('main.js', () => <SyntaxHighlight value={mainText} />)
  .add('hint.js', () => <SyntaxHighlight value={hintText} />)
  .add('演習', () => runTest(main))
