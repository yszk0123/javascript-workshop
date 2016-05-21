import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as Styles from './styles.css';
import ContentLinks from '../../components/ContentLinks';
import { contentsGroupsSelector } from '../../selectors';

const Outer = (props) =>
  <div className={Styles.Outer} {...props} />;

const LinkGroup = (props) =>
  <div className={Styles.LinkGroup} {...props} />;

const Icon = ({ type, size }) =>
  <i className={`fa fa-${type} fa-${size}`} />;
Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
};

const IconLabel = ({ icon, label, size }) =>
  <span>
    <Icon type={icon} size={size} />
    {' '}
    {label}
  </span>;
IconLabel.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
};

const LinkGroups = ({ contentsGroups }) =>
  <Outer>
    {contentsGroups.map((contentsGroup) =>
      <LinkGroup key={contentsGroup.type}>
        <ContentLinks
          label={<IconLabel icon={contentsGroup.icon} label={contentsGroup.type} size="lg" />}
          contents={contentsGroup.contents}
        />
      </LinkGroup>
    )}
  </Outer>;
LinkGroups.propTypes = {
  contentsGroups: PropTypes.array.isRequired
};

export default connect((state) => ({
  contentsGroups: contentsGroupsSelector(state)
}))(LinkGroups);
