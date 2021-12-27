import React, { Component } from "react";
import HomeDetails from "./Home/homeDetails";
import HomeSlider from "./Home/homeSlider";
import "./Home/home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <HomeSlider />
        <HomeDetails />
      </div>
    );
  }
}

export default Home;
