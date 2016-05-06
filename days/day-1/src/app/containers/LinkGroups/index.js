import React from "react";
import { connect } from "react-redux";

import * as Styles from "./styles.css";
import RouteLinks from "../../components/RouteLinks";
import { contentsGroupsSelector } from "../../selectors";

const Outer = (props) =>
  <div className={Styles.Outer} {...props} />;

const LinkGroup = (props) =>
  <div className={Styles.LinkGroup} {...props} />;

const LinkGroups = ({ contentsGroups }) =>
  <Outer>
    {contentsGroups.map((contentsGroup) =>
      <LinkGroup key={contentsGroup.type}>
        <RouteLinks label={contentsGroup.type} routes={contentsGroup.contents} />
      </LinkGroup>
    )}
  </Outer>;

export default connect((state) => ({
  contentsGroups: contentsGroupsSelector(state)
}))(LinkGroups);
