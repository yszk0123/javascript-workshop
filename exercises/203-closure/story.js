import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { runTest } from 'jw-test-utils';
import { Markdown, SyntaxHighlight } from 'jw-ui';
import main from './main';
import mainText from '!raw!./main.js';
import privateExample from './privateExample';
import privateExampleText from '!raw!./privateExample.js';
import readmeText from '!raw!./README.md';
import cautionText from '!raw!./caution.md';

storiesOf('203 Closure', module)
  .add('説明', () => <Markdown value={readmeText} />)
  .add('main.js', () => <SyntaxHighlight value={mainText} />)
  .add('privateExample.js', () => <SyntaxHighlight value={privateExampleText} />)
  .add('利用例 (privateExample.js)', () => runTest(privateExample))
  .add('演習 (main.js)', () => runTest(main))
  .add('注意点', () => <Markdown value={cautionText} />)
