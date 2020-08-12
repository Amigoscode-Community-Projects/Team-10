import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF4630",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

export default function RideRequestComponent() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  let history = useHistory();

  const PersistentDrawer = React.forwardRef((props, ref) => (
    <SwipeableDrawer
      anchor="left"
      open={state["left"]}
      onClose={toggleDrawer("left", false)}
      onOpen={toggleDrawer("left", true)}
    >
      {list("left")}
    </SwipeableDrawer>
  ));
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["User Profile"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Your Trips", "Payment", "Settings", "Logout"].map((text, index) => (
          <ListItem button key={text} onClick={() => history.push(text)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const ref = React.createRef();

  return (
    <MuiThemeProvider theme={theme}>
      <PersistentDrawer ref={ref} />
      <div className={classes.root}>
        <AppBar color="primary" position="static">
          <Toolbar>
            <IconButton
              onClick={toggleDrawer("left", true)}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
      <Typography variant="h6" className={classes.paper}>
        Ride Request - Landing page
      </Typography>
    </MuiThemeProvider>
  );
}
