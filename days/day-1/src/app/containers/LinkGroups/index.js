import React from "react";
import { connect } from "react-redux";

import * as Styles from "./styles.css";
import ContentLinks from "../../components/ContentLinks";
import { contentsGroupsSelector } from "../../selectors";

const Outer = (props) =>
  <div className={Styles.Outer} {...props} />;

const LinkGroup = (props) =>
  <div className={Styles.LinkGroup} {...props} />;

const LinkGroups = ({ contentsGroups }) =>
  <Outer>
    {contentsGroups.map((contentsGroup) =>
      <LinkGroup key={contentsGroup.type}>
        <ContentLinks label={contentsGroup.type} contents={contentsGroup.contents} />
      </LinkGroup>
    )}
  </Outer>;

export default connect((state) => ({
  contentsGroups: contentsGroupsSelector(state)
}))(LinkGroups);
