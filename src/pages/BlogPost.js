import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';
import {BrowserRouter, Link} from "react-router-dom";
import axios from 'axios';
import Moment from 'react-moment';

function generateSlug(a) {

  var b = a.toLowerCase().replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');

  return b
}

class BlogPost extends React.Component {

  constructor(props) {
    super();
    this.state = {
    };
  }

  componentDidMount = async () => {
    // console.log('content ', this.props.postContent)
  }

  render() {
    return (
      <div>
        <div className="about-parent-container">
          <Navbar />
          <div className="post-content">
            <div dangerouslySetInnerHTML={{__html: this.props.postContent}}></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default BlogPost;
