import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import assign from 'object-assign';

import ExerciseType from '../ExerciseType';
import ScriptBlock from '../components/ScriptBlock';
import LabeledCard from '../components/LabeledCard';
import Box from '../components/Box';
import Markdown from '../components/Markdown';
import SyntaxHighlight from '../components/SyntaxHighlight';
import { currentExerciseSelector } from '../selectors';

class Exercise extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleStatusByPath: {}
    };
  }

  toggleStatus(path) {
    const { toggleStatusByPath } = this.state;
    this.setState({
      toggleStatusByPath: assign({}, toggleStatusByPath, {
        [path]: !toggleStatusByPath[path]
      })
    });
  }

  render() {
    const { type, tags, script, doc, files } = this.props;
    const { toggleStatusByPath } = this.state;
    const showDoc = true;
    const showScript = !!script;

    return (
      <Box>
        {showScript &&
          <LabeledCard
            label={`script: ${script.absolutePath}`}
            open={toggleStatusByPath[script.absolutePath]}
            onLabelClick={() => this.toggleStatus(script.absolutePath)}
          >
            <ScriptBlock src={script.absolutePath} />
          </LabeledCard>
        }
        {files.map(({ absolutePath, value }, i) =>
          <LabeledCard
            key={i}
            label={`file: ${absolutePath}`}
            open={toggleStatusByPath[absolutePath]}
            onLabelClick={() => this.toggleStatus(absolutePath)}
          >
            <SyntaxHighlight value={value} />
          </LabeledCard>
        )}
        {showDoc &&
          <LabeledCard
            label={`doc: ${doc.absolutePath}`}
            space
            open={toggleStatusByPath[doc.absolutePath]}
            onLabelClick={() => this.toggleStatus(doc.absolutePath)}
          >
            <Markdown value={doc.value} />
          </LabeledCard>
        }
      </Box>
    );
  }
};
Exercise.propTypes = {
  type: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  doc: PropTypes.object.isRequired,
  files: PropTypes.array.isRequired
};

export default connect(currentExerciseSelector)(Exercise);
