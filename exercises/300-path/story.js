import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { runTest } from 'jw-test-utils';
import { Markdown, SyntaxHighlight } from 'jw-ui';
import readmeText from '!raw!./README.md';
import main from './main';
import mainText from '!raw!./main.js';
import mainHintText from '!raw!./mainHint.js';
import reverse from './reverse';
import reverseText from '!raw!./reverse.js';
import reverseHintText from '!raw!./reverseHint.js';

storiesOf('300 Path', module)
  .add('説明', () => <Markdown value={readmeText} />)
  .add('main.js', () => <SyntaxHighlight value={mainText} />)
  .add('mainHint.js', () => <SyntaxHighlight value={mainHintText} />)
  .add('演習 (main)', () => runTest(main))
  .add('reverse.js', () => <SyntaxHighlight value={reverseText} />)
  .add('reverseHint.js', () => <SyntaxHighlight value={reverseHintText} />)
  .add('演習 (reverse)', () => runTest(reverse))
