import React, { Component } from "react";
import "./App.css";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

class App extends Component {
  state = {
    items: [],
    title: ""
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({
      [name]: value
    });

  handleCreate = e => {
    e.preventDefault();
    if (this.state.title) {
      this.setState(({ items, title }) => ({
        items: [
          ...items,
          {
            title,
            id: Date.now()
          }
        ],
        title: ""
      }));
    }
  };

  render() {
    const { title } = this.state;

    return (
      <div className="App">
        <Paper>
          <Typography variant="display1" align="center" gutterBottom>
            <h2>APS App</h2>
          </Typography>
          <form onSubmit={this.handleCreate}>
            <TextField
              name="title"
              label="Item"
              value={title}
              onChange={this.handleChange}
              margin="normal"
            />
            <Button type="submit" color="primary" variant="raised">
              Create
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

export default App;
