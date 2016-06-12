import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import LinkGroups from '../LinkGroups';
import { Outer } from '../../undefined-components';

import * as styles from './styles.css';
import mainContentTransition from './mainContentTransition.css';

const MainContent = (props) =>
  <div className={styles.MainContent} {...props} />;

const LeftPane = (props) =>
  <div className={styles.LeftPane} {...props} />;

const RightPane = (props) =>
  <div className={styles.RightPane} {...props} />;

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
  location: PropTypes.any.isRequired,
  children: PropTypes.element
};

export default connect((state) => state)(Layout);
