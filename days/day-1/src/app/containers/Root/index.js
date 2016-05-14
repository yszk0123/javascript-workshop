import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import LinkGroups from '../LinkGroups';
import { Outer } from '../../undefined-components';

import * as Styles from './styles.css';
import mainContentTransition from './mainContentTransition.css';

const MainContent = (props) =>
  <div className={Styles.MainContent} {...props} />;

const LeftPane = (props) =>
  <div className={Styles.LeftPane} {...props} />;

const RightPane = (props) =>
  <div className={Styles.RightPane} {...props} />;

const MainContentTransition = ({ children }) =>
  <ReactCSSTransitionGroup
    component="div"
    transitionName={mainContentTransition}
    transitionAppear
    transitionAppearTimeout={500}
    transitionEnterTimeout={500}
    transitionLeaveTimeout={500}
  >
    {children}
  </ReactCSSTransitionGroup>;
MainContentTransition.propTypes = {
  children: PropTypes.element.isRequired
};

const Layout = ({ children, location }) =>
  <Outer>
    <LeftPane>
      <LinkGroups />
    </LeftPane>
    <RightPane>
      <MainContentTransition>
        <MainContent key={location.pathname}>
          {children}
        </MainContent>
      </MainContentTransition>
    </RightPane>
  </Outer>;
Layout.propTypes = {
  location: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
};

export default connect((state) => state)(Layout);
