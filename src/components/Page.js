import React, { Component } from "react";

function Banner(props) {
  if (!props.warn) {
    return null;
  }

  return <div className="warning">Switch</div>;
}

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <div>
        <Banner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "OUT" : "IN"}
        </button>
      </div>
    );
  }
}

export default Page;
