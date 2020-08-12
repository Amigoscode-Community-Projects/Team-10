import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

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
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    flexGrow: 1,
    margin: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function LoginComponent(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();
  const classes = useStyles();

  function handleSubmit(event) {
    event.preventDefault();

    // Code to sumbit to backend will go here.
    if (email === "test" && password === "test") history.push("/riderequest");
  }

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar color="transparent" position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              aria-label="menu"
              onClick={() => history.goBack()}
            >
              <ArrowBackIcon color="primary" fontSize="large" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onInput={(e) => setEmail(e.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link component={RouterLink} to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </MuiThemeProvider>
  );
}
