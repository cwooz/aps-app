import React, { Component } from "react";
import "./App.css";
import Typography from "@material-ui/core/Typography";

class App extends Component {
  state = {
    items: [],
    title: ""
  };

  render() {
    return (
      <div className="App">
        <Typography variant="display1" align="center" gutterBottom>
          <h2>APS App</h2>
        </Typography>
      </div>
    );
  }
}

export default App;
