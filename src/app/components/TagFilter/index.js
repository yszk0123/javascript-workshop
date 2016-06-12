import React, { PropTypes } from 'react';

import * as styles from './styles.css';

const toggleTags = (tags, newTag) => {
  const index = tags.indexOf(newTag);
  return index > -1 ?
    tags.slice(0, index).concat(tags.slice(index + 1)) :
    tags.concat(newTag);
};

const TagFilter = ({ tags, selected, onChange }) =>
  <div>
    {tags.map((tag) =>
      <span
        key={tag}
        className={`${styles.Tag} ${selected.indexOf(tag) > -1 ? styles.ActiveTag : ''}`}
        onClick={(e) => onChange(toggleTags(selected, tag))}
      >
        {tag}
      </span>
    )}
  </div>;
TagFilter.propTypes = {
  tags: PropTypes.array.isRequired,
  selected: PropTypes.array,
  onChange: PropTypes.func.isRequired
};

export default TagFilter;
