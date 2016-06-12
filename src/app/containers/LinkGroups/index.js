import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as styles from './styles.css';
import ExerciseLinks from '../../components/ExerciseLinks';
import TagFilter from '../../components/TagFilter';
import Icon from '../../components/Icon';
import IconLabel from '../../components/IconLabel';
import { searchSelector, exercisesSelector } from '../../selectors';
import { changeSearchText, changeSearchTags } from '../../actions';

const SEARCH_PLACEHOLDER_TEXT = '検索語句を入力';
const TAGS = ['doc', 'es5', 'es6'];

const Outer = (props) =>
  <div className={styles.Outer} {...props} />;

const SearchBox = ({ text, tags, onTextChange, onTagsChange }) =>
  <div className={styles.SearchBox}>
    <div className={styles.TextInput}>
      <input
        type="text"
        placeholder={SEARCH_PLACEHOLDER_TEXT}
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
      />
      <div className={styles.SearchIcon}>
        <Icon type="search" size="lg" />
      </div>
    </div>
    <div className={styles.TagFilterOuter}>
      <TagFilter tags={TAGS} selected={tags} onChange={onTagsChange} />
    </div>
  </div>;
SearchBox.propTypes = {
  text: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onTagsChange: PropTypes.func.isRequired
};

const LinkGroups = ({ search, exercises, onSearchTextChange, onSearchTagsChange }) =>
  <Outer>
    <SearchBox
      {...search}
      onTextChange={onSearchTextChange}
      onTagsChange={onSearchTagsChange}
    />
    <ExerciseLinks exercises={exercises} />
  </Outer>;
LinkGroups.propTypes = {
  search: PropTypes.object.isRequired,
  exercises: PropTypes.array.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onSearchTagsChange: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    search: searchSelector(state),
    exercises: exercisesSelector(state)
  }),
  {
    onSearchTextChange: changeSearchText,
    onSearchTagsChange: changeSearchTags
  },
)(LinkGroups);
