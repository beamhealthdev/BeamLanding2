import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';
import {BrowserRouter, Link} from "react-router-dom";

class NotFound extends React.Component {

  state = {
  }

  render() {
    return (
      <div>
        <div className="about-parent-container">
          <div className="about-main-container">
            <h2>Oops, this page does not exist!</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;