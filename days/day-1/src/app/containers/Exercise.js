import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import assign from 'object-assign';

import ExerciseType from '../ExerciseType';
import ExerciseItemType from '../ExerciseItemType';
import ScriptBlock from '../components/ScriptBlock';
import LabeledCard from '../components/LabeledCard';
import IconLabel from '../components/IconLabel';
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

  handleLabelClick(path) {
    const { toggleStatusByPath } = this.state;
    this.setState({
      toggleStatusByPath: assign({}, toggleStatusByPath, {
        [path]: !toggleStatusByPath[path]
      })
    });
  }

  render() {
    const { type, tags, files } = this.props;
    const { toggleStatusByPath } = this.state;

    return (
      <Box>
        {files.map(({ type, icon, absolutePath, value }, i) =>
          <LabeledCard
            key={i}
            label={<IconLabel icon={icon} label={absolutePath} />}
            open={toggleStatusByPath[absolutePath]}
            space={type === ExerciseItemType.Doc}
            onLabelClick={() => this.handleLabelClick(absolutePath)}
          >
            {type === ExerciseItemType.Demo ?
              <ScriptBlock src={absolutePath} /> :
             type === ExerciseItemType.Doc ?
              <Markdown value={value} /> :
              <SyntaxHighlight value={value} />
            }
          </LabeledCard>
        )}
      </Box>
    );
  }
};
Exercise.propTypes = {
  type: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  files: PropTypes.array.isRequired
};

export default connect(currentExerciseSelector)(Exercise);
