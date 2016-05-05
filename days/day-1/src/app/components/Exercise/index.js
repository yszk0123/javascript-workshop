import React from "react";

import * as Styles from "./styles.css";
import Markdown from "../Markdown";

const LOAD_TIMEOUT = 500;

const ReloadButton = ({ onClick }) =>
  <input className={Styles.ReloadButton} type="button" value="更新" onClick={onClick} />;

const Header = (props) =>
  <div className={Styles.Header} {...props} />;

const Content = (props) =>
  <div className={Styles.Content} {...props} />;

const Footer = (props) =>
  <div className={Styles.Footer} {...props} />;

class Exercise extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loadReady: false
    };
  }

  componentDidMount() {
    this.loadTimerId = setTimeout(() => {
      this.setState({ loadReady: true });
    }, LOAD_TIMEOUT);
  }

  componentWillUnmount() {
    if (this.loadTimerId) {
      clearTimeout(this.loadTimerId);
    }
  }

  handleReloadClick(event) {
    event.preventDefault();
    this.refs.frame.contentWindow.location.reload();
  }

  render() {
    const { label, src, document } = this.props;
    const { loadReady } = this.state;

    return (
      <div className={Styles.Exercise}>
        <Header>
          <ReloadButton onClick={this.handleReloadClick.bind(this)} />
          <label className={Styles.Label}>{label}</label>
        </Header>
        <Content>
          {loadReady && <iframe ref="frame" className={Styles.Frame} src={src} />}
        </Content>
        <Footer>
          <Markdown content={document} />
        </Footer>
      </div>
    );
  }
}

export default Exercise;
