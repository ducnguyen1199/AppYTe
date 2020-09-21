import React, { Component } from "react";
import Nav from "./routes/Drawer";
import * as ScreenOrientation from "expo-screen-orientation";

export default class App extends Component {
  componentDidMount() {
    ScreenOrientation.unlockAsync();
    console.disableYellowBox = true;
  }
  render() {
    return <Nav />;
  }
}
