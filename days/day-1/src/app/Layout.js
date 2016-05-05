import React from "react";

import { exerciseRoutes, documentRoutes } from "./routes";
import ExerciseLinks from "./components/ExerciseLinks";
import DocumentLinks from "./components/DocumentLinks";
import { Outer } from "./undefined-components";

import "normalize.css";
import * as Styles from "./styles.css";

const LinkGroup = (props) =>
  <div className={Styles.LinkGroup} {...props} />;

const MainContent = (props) =>
  <div className={Styles.MainContent} {...props} />;

const LinkGroupLayout = () => (
  <div className={Styles.LinkGroupLayout}>
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

const LeftPane = (props) =>
  <div className={Styles.LeftPane} {...props} />;

const RightPane = (props) =>
  <div className={Styles.RightPane} {...props} />;

const Layout = ({ children }) => (
  <Outer>
    <LeftPane>
      <LinkGroupLayout />
    </LeftPane>
    <RightPane>
      <MainContent>
        {children}
      </MainContent>
    </RightPane>
  </Outer>
);

export default Layout;
