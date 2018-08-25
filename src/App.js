import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";

import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
// tree-shaking enabled
import {
  List,
  ListItem,
  ListItemText,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core";
import { ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

import { teal } from "@material-ui/core/colors";

// import Typography from "@material-ui/core/Typography";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

class App extends Component {
  state = {
    items: [
      { id: 1, title: "milk" },
      { id: 2, title: "eggs" },
      { id: 3, title: "hot-sauce" }
    ],
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

  handleDelete = id =>
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id)
    }));

  render() {
    const { title, items } = this.state;

    const theme = createMuiTheme({
      palette: {
        primary: {
          light: teal[200], // same as '#FFCC80'
          main: "#1de9b6", // same as orange[600]
          dark: "#14a37f",
          contrastText: "rgb(0,0,0)"
        }
      }
    });

    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <NavBar />

          <Paper>
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
            <List>
              {items.map(({ id, title }) => (
                <ListItem key={id}>
                  <ListItemText primary={title} />
                  <ListItemSecondaryAction>
                    <IconButton
                      color="primary"
                      onClick={() => this.handleDelete(id)}
                    >
                      <Delete />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
