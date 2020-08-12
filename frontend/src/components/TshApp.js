import React, { useState, useEffect } from "react";
import SplashScreen from "./SplashScreen";
import OnboardingComponent from "./OnboardingComponent";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginComponent from "./LoginComponent";
import SignupComponent from "./SignupComponent";
import ErrorComponent from "./ErrorComponent";
import RideRequestComponent from "./RideRequestComponent";

export default function TshApp() {
  const [renderSplashScreen, setRenderSplashScreen] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);

  //Check if logged in

  //Call APIs

  //Relicate api call during start up
  setTimeout(() => {
    setRenderSplashScreen(false);
  }, 1000);

  if (renderSplashScreen) {
    return <SplashScreen />;
  } else
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={OnboardingComponent} />
          <Route path="/signup" component={SignupComponent} />
          <Route path="/signin" component={LoginComponent} />
          <Route path="/riderequest" component={RideRequestComponent} />
          <Route component={ErrorComponent} />
        </Switch>
      </Router>
    );
}
