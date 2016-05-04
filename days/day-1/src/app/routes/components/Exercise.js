import React from "react";

import * as Styles from "./styles.css";

const ReloadButton = ({ onClick }) =>
  <input className={Styles.ReloadButton} type="button" value="更新" onClick={onClick} />;

class Exercise extends React.Component {
  handleReloadClick(event) {
    event.preventDefault();
    this.refs.frame.contentWindow.location.reload();
  }

  render() {
    const { title, src } = this.props;

    return (
      <div className={Styles.Exercise}>
        <ReloadButton onClick={this.handleReloadClick.bind(this)} />
        <label className={Styles.Title}>{title}</label>
        <iframe ref="frame" className={Styles.Frame} src={src} />
      </div>
    );
  }
}

export default Exercise;
