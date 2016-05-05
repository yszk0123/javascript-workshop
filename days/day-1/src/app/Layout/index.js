import React from "react";

import RouteLinks from "../components/RouteLinks";
import { Outer } from "../undefined-components";

import * as Styles from "./styles.css";

const LinkGroup = (props) =>
  <div className={Styles.LinkGroup} {...props} />;

const MainContent = (props) =>
  <div className={Styles.MainContent} {...props} />;

const LeftPane = (props) =>
  <div className={Styles.LeftPane} {...props} />;

const RightPane = (props) =>
  <div className={Styles.RightPane} {...props} />;

const LinkGroupOuter = ({ documents, exercises }) => (
  <div className={Styles.LinkGroupOuter}>
    {!!documents.length &&
      <LinkGroup>
        <RouteLinks label="Documents" routes={documents} />
      </LinkGroup>
    }
    {!!exercises.length &&
      <LinkGroup>
        <RouteLinks label="Exercises" routes={exercises} />
      </LinkGroup>
    }
  </div>
);

const Layout = ({ contents, children }) => (
  <Outer>
    <LeftPane>
      <LinkGroupOuter documents={contents.documents} exercises={contents.exercises} />
    </LeftPane>
    <RightPane>
      <MainContent>
        {children}
      </MainContent>
    </RightPane>
  </Outer>
);

export default Layout;
