import React from "react";

export default ({ switchName, timeout }) => (BaseComponent) => {
  class SwitcherComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        [switchName]: false
      };
    }

    componentDidMount() {
      this.loadTimerId = setTimeout(() => {
        this.setState({ [switchName]: true });
      }, timeout);
    }

    componentWillUnmount() {
      if (this.loadTimerId) {
        clearTimeout(this.loadTimerId);
      }
    }

    render() {
      return <BaseComponent {...this.props} {...this.state} />;
    }
  }

  return SwitcherComponent;
};
