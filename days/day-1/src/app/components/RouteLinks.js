import React from "react";
import { Link } from "react-router";

import * as Styles from "./styles.css";
import ExtraStyles from "./ExtraStyles";

const RouteLinks = ({ label, routes }) => (
  <div>
    <h2 className={Styles.LinkLabel}>{label}</h2>
    <ul className={Styles.Links}>
      {routes.map(({ absolutePath, title }, i) => (
        <li className={Styles.Link} key={i}>
          <Link to={absolutePath} activeStyle={ExtraStyles.ActiveLink}>{title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default RouteLinks;
