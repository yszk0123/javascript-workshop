import React from "react";
import { connect } from "react-redux";

import Layout from "./Layout";

export default connect(({ contents }) => ({
  contents
}), {})(Layout);
