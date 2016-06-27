import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { Outer } from 'jw-undefined-components';
import LinkGroups from '../LinkGroups';
import mainContentTransition from './mainContentTransition.css';
import * as styles from './styles.css';

function MainContent(props) {
  return <div className={styles.MainContent} {...props} />;
}

function LeftPane(props) {
  return <div className={styles.LeftPane} {...props} />;
}

function RightPane(props) {
  return <div className={styles.RightPane} {...props} />;
}

function MainContentTransition({ children }) {
  return (
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
  );
}
MainContentTransition.propTypes = {
  children: PropTypes.element.isRequired
};

function Layout({ children, location }) {
  return (
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
  );
}
Layout.propTypes = {
  location: PropTypes.any.isRequired,
  children: PropTypes.element
};

export default connect((state) => state)(Layout);
