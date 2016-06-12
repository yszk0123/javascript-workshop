import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import * as styles from './styles.css';

const ExerciseLinks = ({ exercises }) => (
  <ul className={styles.Links}>
    {exercises.map(({ tags, absolutePath, title }, i) => (
      <li className={styles.Link} key={i}>
        <Link to={absolutePath} activeClassName={styles.ActiveLink}>{title}</Link>
        {tags.map((tag, i) =>
          <span key={i} className={styles.Tag}>{tag}</span>
        )}
      </li>
    ))}
  </ul>
);
ExerciseLinks.propTypes = {
  exercises: PropTypes.array.isRequired
};

export default ExerciseLinks;
