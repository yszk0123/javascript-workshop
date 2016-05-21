import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as Styles from './styles.css';
import ContentLinks from '../../components/ContentLinks';
import { searchSelector, contentsSelector } from '../../selectors';
import { changeSearchText, changeSearchTags } from '../../actions';

const SEARCH_PLACEHOLDER_TEXT = '検索語句';
const TAGS = ['doc', 'es5', 'es6'];

const toggleTags = (tags, newTag) => {
  const index = tags.indexOf(newTag);
  return index > -1 ?
    tags.slice(0, index).concat(tags.slice(index + 1)) :
    tags.concat(newTag);
};

const Outer = (props) =>
  <div className={Styles.Outer} {...props} />;

const Icon = ({ type, size }) =>
  <i className={`fa fa-${type} fa-${size}`} />;
Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
};

const IconLabel = ({ icon, label, size }) =>
  <span>
    <Icon type={icon} size={size} />
    {' '}
    {label}
  </span>;
IconLabel.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
};

const SearchBox = ({ text, tags, onTextChange, onTagsChange }) =>
  <div className={Styles.SearchBox}>
    <input
      type="text"
      placeholder={SEARCH_PLACEHOLDER_TEXT}
      value={text}
      onChange={(e) => onTextChange(e.target.value)}
    />
    <Icon type="search" size="lg" />
    <div>
      {TAGS.map((tag) =>
        <span
          key={tag}
          className={`${Styles.Tag} ${tags.indexOf(tag) > -1 ? Styles.ActiveTag : ''}`}
          onClick={(e) => onTagsChange(toggleTags(tags, tag))}
        >
          {tag}
        </span>
      )}
    </div>
  </div>;
SearchBox.propTypes = {
  text: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onTagsChange: PropTypes.func.isRequired
};

const LinkGroups = ({ search, contents, onSearchTextChange, onSearchTagsChange }) =>
  <Outer>
    <SearchBox
      {...search}
      onTextChange={onSearchTextChange}
      onTagsChange={onSearchTagsChange}
    />
    <ContentLinks contents={contents} />
  </Outer>;
LinkGroups.propTypes = {
  search: PropTypes.object.isRequired,
  contents: PropTypes.array.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onSearchTagsChange: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({
    search: searchSelector(state),
    contents: contentsSelector(state)
  }),
  {
    onSearchTextChange: changeSearchText,
    onSearchTagsChange: changeSearchTags
  },
)(LinkGroups);
