import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import ContentType from '../ContentType';
import ScriptBlock from '../components/ScriptBlock';
import LabeledCard from '../components/LabeledCard';
import Box from '../components/Box';
import Markdown from '../components/Markdown';
import { currentContentSelector } from '../selectors';

const Content = ({ type, tags, value, absoluteFilePath }) => {
  const showDoc = true;
  const showScript = tags.indexOf('doc') === -1;

  return (
    <Box>
      {showScript &&
        <LabeledCard label={`script: ${absoluteFilePath}`}>
          <ScriptBlock src={absoluteFilePath} />
        </LabeledCard>
      }
      {showDoc &&
        <LabeledCard label={`doc: ${absoluteFilePath}`} space scrollable>
          <Markdown value={value} />
        </LabeledCard>
      }
    </Box>
  );
};
Content.propTypes = {
  type: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  absoluteFilePath: PropTypes.string.isRequired
};

export default connect(currentContentSelector)(Content);
