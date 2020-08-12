import React from "react";

import { ReactComponent as Logo } from "../logoblack.svg";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  Container,
  Box,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// Or Create your Own theme:
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF4630",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  submit: {
    margin: theme.spacing(1, 0, 1),
  },

  box: {
    marginTop: theme.spacing(20),
  },
}));

export default function OnboardingComponent() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography
            color="primary"
            variant="button"
            display="block"
            gutterBottom
          >
            Taxi Service Hub
          </Typography>
          <Box mt={5} className={classes.box}>
            <Logo />
          </Box>
          <div style={{ width: "100%" }}>
            <Box className={classes.box}>
              <Button
                component={Link}
                to="/signup"
                size="large"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Button
                component={Link}
                to="/signin"
                size="large"
                fullWidth
                variant="outlined"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
            </Box>
          </div>
        </div>
      </Container>
    </MuiThemeProvider>
  );
}
