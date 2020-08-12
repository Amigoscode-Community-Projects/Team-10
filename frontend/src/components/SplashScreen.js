import React from "react";
import { ReactComponent as Logo } from "../logo.svg";

export default function SplashScreen() {
  const style = {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    position: "fixed",
    background: "#FF4630",
  };

  return (
    <div style={style}>
      <Logo />
    </div>
  );
}
