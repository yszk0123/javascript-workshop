import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import * as Styles from './styles.css';

const ContentLinks = ({ contents }) => (
  <ul className={Styles.Links}>
    {contents.map(({ tags, absolutePath, title }, i) => (
      <li className={Styles.Link} key={i}>
        <Link to={absolutePath} activeClassName={Styles.ActiveLink}>{title}</Link>
        {tags.map((tag, i) =>
          <span key={i} className={Styles.Tag}>{tag}</span>
        )}
      </li>
    ))}
  </ul>
);
ContentLinks.propTypes = {
  contents: PropTypes.array.isRequired
};

export default ContentLinks;
