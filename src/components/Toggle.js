import React, { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  // toggleItem() {
  //   if (this.state.isToggleOn === "OUT") {
  //     console.log("clicked");
  //   }
  // }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "IN" : "OUT"}
      </button>
    );
  }
}

export default Toggle;
