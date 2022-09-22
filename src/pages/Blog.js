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

class Blog extends React.Component {

  constructor(props) {
    super();
    this.state = {
      blogData:[]
    };
  }

  componentDidMount = async () => {
    let response = await axios({
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      },
      url: 'https://www.googleapis.com/blogger/v3/blogs/4940696712738873960/posts',
      params: {
        key: 'AIzaSyDxGLukNdVzmx15pWe42egglHWf5zMkbIM',
      },
    });
    console.log('da ', response.data)
    this.setState({blogData: response.data.items})
  }

  render() {
    let posts = []
    if(this.state.blogData) {
      let posts = this.state.blogData.map((post, index) => {
        return(
          <Link to={"/" + generateSlug(post.title)} className="blog-thumbnail" key={index} onClick={() => this.props.getBlogPost(generateSlug(post.title), post.content)}>
            <h6>{post.title}</h6>
            <div><Moment local format="ll">{post.published}</Moment></div>
          </Link>
        )
      })
    }
    return (
      <div>
        <div className="about-parent-container">
          <Navbar />
          <div className="about-main-container">
            <AnimationOnScroll className="solutions-landing-top animate__fadeInDown animate__fastest">
              <h1>Blog</h1>
              <h2>Touch Base with Beam.</h2>
            </AnimationOnScroll>
          </div>
          <div className="blog-container">
            <BrowserRouter basename="/blog">
              {posts.length > 0 ? posts : ''}
            </BrowserRouter>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Blog;
