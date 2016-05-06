import React from "react";
import { Link } from "react-router";

import * as Styles from "./styles.css";

const ContentLinks = ({ label, contents }) => (
  <div>
    <h2 className={Styles.LinkLabel}>{label}</h2>
    <ul className={Styles.Links}>
      {contents.map(({ absolutePath, title }, i) => (
        <li className={Styles.Link} key={i}>
          <Link to={absolutePath} activeClassName={Styles.ActiveLink}>{title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default ContentLinks;
