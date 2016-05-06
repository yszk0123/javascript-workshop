import React from "react";

import * as Styles from "./styles.css";
import Markdown from "../Markdown";
import lazySwitcher from "./lazySwitcher";

const LOAD_TIMEOUT = 500;

const ReloadButton = ({ onClick }) =>
  <input className={Styles.ReloadButton} type="button" value="更新" onClick={onClick} />;

const Header = (props) =>
  <div className={Styles.Header} {...props} />;

const Main = (props) =>
  <div className={Styles.Main} {...props} />;

const Footer = (props) =>
  <div className={Styles.Footer} {...props} />;

class Exercise extends React.Component {
  handleReloadClick(event) {
    event.preventDefault();
    this.refs.frame.contentWindow.location.reload();
  }

  render() {
    const { label, src, doc, loadReady } = this.props;

    return (
      <div className={Styles.Exercise}>
        <Header>
          <ReloadButton onClick={this.handleReloadClick.bind(this)} />
          <label className={Styles.Label}>{label}</label>
        </Header>
        <Main>
          {loadReady && <iframe ref="frame" className={Styles.Frame} src={src} />}
        </Main>
        <Footer>
          <Markdown value={doc} />
        </Footer>
      </div>
    );
  }
}

export default lazySwitcher({
  switchName: "loadReady",
  timeout: LOAD_TIMEOUT
})(Exercise);
