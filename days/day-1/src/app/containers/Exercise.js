import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import ExerciseType from '../ExerciseType';
import ScriptBlock from '../components/ScriptBlock';
import LabeledCard from '../components/LabeledCard';
import Box from '../components/Box';
import Markdown from '../components/Markdown';
import SyntaxHighlight from '../components/SyntaxHighlight';
import { currentExerciseSelector } from '../selectors';

const Exercise = ({ type, tags, script, doc, files }) => {
  const showDoc = true;
  const showScript = !!script;

  return (
    <Box>
      {showScript &&
        <LabeledCard label={`script: ${script.absolutePath}`}>
          <ScriptBlock src={script.absolutePath} />
        </LabeledCard>
      }
      {files.map(({ absolutePath, value }, i) =>
        <LabeledCard key={i} label={`file: ${absolutePath}`} space scrollable>
          <SyntaxHighlight value={value} />
        </LabeledCard>
      )}
      {showDoc &&
        <LabeledCard label={`doc: ${doc.absolutePath}`} space scrollable>
          <Markdown value={doc.value} />
        </LabeledCard>
      }
    </Box>
  );
};
Exercise.propTypes = {
  type: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  doc: PropTypes.object.isRequired,
  files: PropTypes.array.isRequired
};

export default connect(currentExerciseSelector)(Exercise);
