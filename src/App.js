import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Toggle from "./components/Toggle";
import Page from "./components/Page";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";

// tree-shaking enabled
import {
  List,
  ListItem,
  ListItemText,
  createMuiTheme,
  MuiThemeProvider
  // Switch,
  // FormControlLabel
} from "@material-ui/core";
import { ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { teal } from "@material-ui/core/colors";

class App extends Component {
  state = {
    items: [
      { id: 1, title: "milk" },
      { id: 2, title: "eggs" },
      { id: 3, title: "hot-sauce" }
    ],
    items2: [],
    title: "",
    checkedA: true,
    checkedB: true
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
    this.setState(({ items }) => ({
      items: items.filter(ex => ex.id !== id)
    }));

  // move item from 'need to buy' to 'in my cart' and back
  // handleToggle = name => event => {
  //   this.setState({ [name]: event.target.checked });
  // };
  // if checkedB === true

  render() {
    const { title, items } = this.state;

    const theme = createMuiTheme({
      palette: {
        primary: {
          light: teal[200],
          main: "#1de9b6",
          dark: "#14a37f",
          contrastText: "rgb(0,0,0)"
        }
      }
    });

    const style = {};

    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <NavBar />
          {/* Top Component */}
          <Typography
            variant="display1"
            align="center"
            gutterBottom
            style={{ marginTop: "20px", color: "white" }}
          >
            Need To Buy
          </Typography>
          <Paper>
            <form onSubmit={this.handleCreate}>
              <TextField
                name="title"
                label="Item"
                value={title}
                onChange={this.handleChange}
                margin="normal"
              />
              <Button
                type="submit"
                color="primary"
                variant="raised"
                style={{ style }}
              >
                Create
              </Button>
            </form>
            <List>
              {items.map(({ id, title }) => (
                <ListItem key={id}>
                  <Toggle />

                  <ListItemText primary={title} />
                  {/* <FormControlLabel
                    control={
                      <Switch
                        checked={this.state.checkedB}
                        onChange={this.handleToggle("checkedB")}
                        value="checkedB"
                        color="primary"
                      />
                    }
                    label="Toggle Cart"
                  /> */}
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
          <br />
          {/* Bottom Component */}
          <Typography
            variant="display1"
            align="center"
            gutterBottom
            style={{ marginTop: "20px", color: "white" }}
          >
            In My Cart
          </Typography>
          <Paper>
            <br />
            <List>
              {items.map(({ id, title }) => (
                <ListItem key={id}>
                  <Toggle />
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
            <br />
            <Page />
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
