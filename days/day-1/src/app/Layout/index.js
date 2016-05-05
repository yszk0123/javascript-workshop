import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import RouteLinks from "../components/RouteLinks";
import { Outer } from "../undefined-components";

import * as Styles from "./styles.css";
import mainContentTransition from "./mainContentTransition.css";

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

const MainContentTransition = ({ children }) =>
  <ReactCSSTransitionGroup
    component="div"
    transitionName={mainContentTransition}
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnterTimeout={500}
    transitionLeaveTimeout={500}
  >
    {children}
  </ReactCSSTransitionGroup>;

const Layout = ({ contents, children, location }) => (
  <Outer>
    <LeftPane>
      <LinkGroupOuter documents={contents.documents} exercises={contents.exercises} />
    </LeftPane>
    <RightPane>
      <MainContentTransition>
        <MainContent key={location.pathname}>
          {children}
        </MainContent>
      </MainContentTransition>
    </RightPane>
  </Outer>
);

export default Layout;
