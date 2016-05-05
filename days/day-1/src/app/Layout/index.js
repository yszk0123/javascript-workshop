import React from "react";
import "normalize.css";

import { exerciseRoutes, documentRoutes } from "../routes";
import ExerciseLinks from "../components/ExerciseLinks";
import DocumentLinks from "../components/DocumentLinks";
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

const LinkGroupOuter = () => (
  <div className={Styles.LinkGroupOuter}>
    {!!exerciseRoutes.length &&
      <LinkGroup>
        <ExerciseLinks routes={exerciseRoutes} />
      </LinkGroup>
    }
    {!!documentRoutes.length &&
      <LinkGroup>
        <DocumentLinks routes={documentRoutes} />
      </LinkGroup>
    }
  </div>
);

const Layout = ({ children }) => (
  <Outer>
    <LeftPane>
      <LinkGroupOuter />
    </LeftPane>
    <RightPane>
      <MainContent>
        {children}
      </MainContent>
    </RightPane>
  </Outer>
);

export default Layout;
