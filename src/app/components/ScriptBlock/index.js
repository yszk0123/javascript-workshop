import React, { PropTypes } from 'react';

import * as styles from './styles.css';
import lazySwitcher from './lazySwitcher';

const LOAD_TIMEOUT = 500;

const ReloadButton = ({ onClick }) =>
  <button className={styles.ReloadButton} onClick={onClick}>
    <span><i className="fa fa-refresh" /> 更新</span>
  </button>;
ReloadButton.propTypes = {
  onClick: PropTypes.func.isRequired
};

class ScriptBlock extends React.Component {
  constructor(props) {
    super(props);

    this.handleReloadClick = this.handleReloadClick.bind(this);
  }

  handleReloadClick(event) {
    event.preventDefault();
    this.refs.frame.contentWindow.location.reload();
  }

  render() {
    const { src, loadReady } = this.props;

    // TODO: Don't use string ref. Use callback ref instead.
    return (
      <div className={styles.ScriptBlock}>
        <ReloadButton onClick={this.handleReloadClick} />
        {loadReady && <iframe ref="frame" className={styles.Frame} src={src} />}
      </div>
    );
  }
}
ScriptBlock.propTypes = {
  src: PropTypes.string,
  loadReady: PropTypes.bool.isRequired
};

export default lazySwitcher({
  switchName: 'loadReady',
  timeout: LOAD_TIMEOUT
})(ScriptBlock);
