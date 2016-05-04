import React from "react";
import { Link } from "react-router";

import { exerciseRoutes, documentRoutes } from "./routes";
import { Content, Outer } from "./undefined-components";

import "normalize.css";
import * as Styles from "./styles.css";

const LinkGroup = ({ children }) =>
  <div className={Styles.LinkGroup}>{children}</div>;

const Links = () => (
  <div className={Styles.LinkGroupContainer}>
    {!!exerciseRoutes.length &&
      <LinkGroup>
        <h2 className={Styles.LinkHeader}>Exercises</h2>
        <ul className={Styles.Links}>
          {exerciseRoutes.map(({ path, title }, i) => (
            <li className={Styles.Link} key={i}><Link to={path}>{title}</Link></li>
          ))}
        </ul>
      </LinkGroup>
    }
    {!!documentRoutes.length &&
      <LinkGroup>
        <h2 className={Styles.LinkHeader}>Documents</h2>
        <ul className={Styles.Links}>
          {documentRoutes.map(({ path, title }, i) => (
            <li className={Styles.Link} key={i}><Link to={path}>{title}</Link></li>
          ))}
        </ul>
      </LinkGroup>
    }
  </div>
);

const LeftPane = ({ children }) => (
  <div className={Styles.LeftPane}>{children}</div>
);

const RightPane = ({ children }) => (
  <div className={Styles.RightPane}>{children}</div>
);

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
