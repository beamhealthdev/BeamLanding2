import './Styles/Main.scss';
import React, { useState, useEffect } from "react";
import {BrowserRouter, Link} from "react-router-dom";

class Navbar extends React.Component {

  state = {
    scrolled: false,
    showDemoBtn: true,
  }

  listenScrollEvent = e => {
    if (window.scrollY > 120) {
      this.setState({scrolled:true})
    } else {
      this.setState({scrolled:false})
    }
    // if (window.scrollY > 0) {
    //   this.setState({showDemoBtn:true})
    // } else {
    //   this.setState({showDemoBtn:false})
    // }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return (
      <div className={this.state.scrolled ? 'scroll-nav' : 'nav-container'}>
        <div className='items-left'>
          <BrowserRouter basename="/">
            <Link to='/' onClick={()=> this.props.updateNav('home')}>
              <img src={this.state.scrolled ? 'https://beam.health/wp-content/themes/beam-health/images/logo-white.png' : 'https://beam.health/wp-content/themes/beam-health/images/logo.png'} />
            </Link>
          </BrowserRouter>
        </div>
        <div className='items-right'>
          <BrowserRouter basename="/">
            <Link to='about' onClick={()=> this.props.updateNav('about')}>About Us</Link>
            <Link to='solutions' onClick={()=> this.props.updateNav('solutions')}>Solutions</Link>
            <Link to='resources' onClick={()=> this.props.updateNav('resources')}>Resources</Link>
          </BrowserRouter>
          <a className={this.state.showDemoBtn ? 'cta-button' : 'cta-button-hidden'} href='#schedule-demo'>Schedule Demo</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
