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
  MuiThemeProvider,
  Switch,
  FormControlLabel
} from "@material-ui/core";
import { ListItemSecondaryAction, IconButton } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

import { teal } from "@material-ui/core/colors";

import Typography from "@material-ui/core/Typography";
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
    this.setState(({ itmes }) => ({
      itmes: itmes.filter(ex => ex.id !== id)
    }));

  handleToggle = name => event => {
    this.setState({ [name]: event.target.checked });
  };

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
                  <ListItemText primary={title} />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={this.state.checkedB}
                        onChange={this.handleToggle("checkedB")}
                        value="checkedB"
                        color="primary"
                      />
                    }
                    label="Toggle Cart"
                  />
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
          <Typography
            variant="display1"
            align="center"
            gutterBottom
            style={{ marginTop: "20px", color: "white" }}
          >
            In My Cart
          </Typography>
          <Paper>
            <List>
              {items.map(({ id, title }) => (
                <ListItem key={id}>
                  <ListItemText primary={title} />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={this.state.checkedB}
                        onChange={this.handleToggle("checkedB")}
                        value="checkedB"
                        color="primary"
                      />
                    }
                    label="Toggle Cart"
                  />
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
