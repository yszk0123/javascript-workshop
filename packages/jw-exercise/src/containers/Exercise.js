import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import assign from 'object-assign';

import ExerciseType from '../ExerciseType';
import ExerciseItemType from '../ExerciseItemType';
import ScriptBlock from '../components/ScriptBlock';
import { LabeledCard, IconLabel, Box, Card, Markdown, SyntaxHighlight } from 'jw-ui';
import { currentExerciseSelector } from '../selectors';

const OPEN_FILE_PATTERN = /README\.md$/;
const MANUAL_RELOAD_MESSAGE = 'この演習は自動リロードに対応していません。ファイル変更後は更新ボタンを押して下さい';

function ManualReloadMessage() {
  return <Card>{MANUAL_RELOAD_MESSAGE}</Card>;
}

class Exercise extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTabId: null
    };
  }

  handleTabClick(tabId) {
    this.setState({
      activeTabId: tabId
    });
  }

  render() {
    const { type, tags, entry, files } = this.props;
    const { toggleStatusByPath } = this.state;

    return (
      <Box>
        {tags.indexOf("es5") > -1 && <ManualReloadMessage />}
        <Demo>
          <ScriptBlock src={entry} />
        </Demo>
        <Docs>
          <Markdown value={doc.value} />
        </Docs>
        <Tabs>
          <TabHeader>
          </TabHeader>
          <TabContent>
            {files.map(({ id, type, icon, originalPath, value }) =>
              <LabeledCard
                key={id}
                label={<IconLabel icon={icon} label={originalPath} />}
                open={toggleStatusByPath[title]}
                space={type === ExerciseItemType.Doc}
                onLabelClick={() => this.handleTabClick(id)}
              >
                {type === ExerciseItemType.Demo ?
                 type === ExerciseItemType.Doc ?
                  <SyntaxHighlight value={value} />
                }
              </LabeledCard>
            )}
          </TabContent>
        </Tabs>
      </Box>
    );
  }
};
Exercise.propTypes = {
  type: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  entry: PropTypes.func.isRequired,
  docs: PropTypes.array.isRequired,
  files: PropTypes.array.isRequired
};

export default connect(currentExerciseSelector)(Exercise);
