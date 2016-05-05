import React from "react";

import * as Styles from "./styles.css";
import Markdown from "./Markdown";

const ReloadButton = ({ onClick }) =>
  <input className={Styles.ReloadButton} type="button" value="更新" onClick={onClick} />;

const Header = (props) =>
  <div className={Styles.Header} {...props} />;

const Content = (props) =>
  <div className={Styles.Content} {...props} />;

const Footer = (props) =>
  <div className={Styles.Footer} {...props} />;

class Exercise extends React.Component {
  handleReloadClick(event) {
    event.preventDefault();
    this.refs.frame.contentWindow.location.reload();
  }

  render() {
    const { title, src, document } = this.props;

    return (
      <div className={Styles.Exercise}>
        <Header>
          <ReloadButton onClick={this.handleReloadClick.bind(this)} />
          <label className={Styles.Title}>{title}</label>
        </Header>
        <Content>
          <iframe ref="frame" className={Styles.Frame} src={src} />
        </Content>
        <Footer>
          <Markdown content={document} />
        </Footer>
      </div>
    );
  }
}

export default Exercise;
