import React from "react";
import { Link } from "react-router";

import { exerciseRoutes, documentRoutes } from "./routes";
import { Outer } from "./undefined-components";

import "normalize.css";
import * as Styles from "./styles.css";

// TODO: Move to a separate file
const ACTIVE = {
  background: "#ddd"
};

const LinkGroup = (props) =>
  <div className={Styles.LinkGroup} {...props} />;

const Content = (props) =>
  <div className={Styles.Content} {...props} />;

const Links = () => (
  <div className={Styles.LinkGroupContainer}>
    {!!exerciseRoutes.length &&
      <LinkGroup>
        <h2 className={Styles.LinkHeader}>Exercises</h2>
        <ul className={Styles.Links}>
          {exerciseRoutes.map(({ path, title }, i) => (
            <li className={Styles.Link} key={i}><Link to={path} activeStyle={ACTIVE}>{title}</Link></li>
          ))}
        </ul>
      </LinkGroup>
    }
    {!!documentRoutes.length &&
      <LinkGroup>
        <h2 className={Styles.LinkHeader}>Documents</h2>
        <ul className={Styles.Links}>
          {documentRoutes.map(({ path, title }, i) => (
            <li className={Styles.Link} key={i}><Link to={path} activeStyle={ACTIVE}>{title}</Link></li>
          ))}
        </ul>
      </LinkGroup>
    }
  </div>
);

const LeftPane = (props) =>
  <div className={Styles.LeftPane} {...props} />;

const RightPane = (props) =>
  <div className={Styles.RightPane} {...props} />;

const Layout = ({ children }) => (
  <Outer>
    <LeftPane>
      <Links />
    </LeftPane>
    <RightPane>
      <Content>
        {children}
      </Content>
    </RightPane>
  </Outer>
);

export default Layout;
