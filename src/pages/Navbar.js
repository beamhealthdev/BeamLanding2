import './Styles/Main.scss';
import React, { useState, useEffect } from "react";
import {BrowserRouter, Link} from "react-router-dom";
import ClickOutside from 'react-click-outside';
import ResourcesModal from './ResourcesModal';

class Navbar extends React.Component {

  state = {
    scrolled: false,
    showDemoBtn: true,
    showModal: false
  }

  listenScrollEvent = e => {
    if (window.scrollY > 140) {
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

  toggleResourcesModal = () => {
    this.setState({showModal: !this.state.showModal})
  }

  render() {
    return (
      <div className={this.state.scrolled ? 'scroll-nav' : 'nav-container'}>
        {this.state.showModal &&
        <div className='hover-overlay'>
          <ResourcesModal toggleResourcesModal={() => this.toggleResourcesModal()} />
        </div>
        }
        <div className='items-left'>
          <BrowserRouter basename="/">
            <Link to='/' onClick={()=> this.props.updateNav('home')}>
              <img src='https://beam-provider-landing.s3.amazonaws.com/final/beam_logo.png' />
            </Link>
            <Link to='about' onClick={()=> this.props.updateNav('about')}>About Us</Link>
            <Link to='api' onClick={()=> this.props.updateNav('api')}>API</Link>
            <Link to='solutions' onClick={()=> this.props.updateNav('solutions')}>Solutions</Link>
            <div onClick={() => this.toggleResourcesModal()}>Resources&nbsp;<i className='fas fa-chevron-down'></i></div>
          </BrowserRouter>
        </div>
        <div className='mobile-nav'>
          <i className='fas fa-bars' onClick={() => this.setState({mobileMenu:true})}></i>
        </div>
        {this.state.mobileMenu &&
        <div className='mobile-overlay'>
          <i className='fas fa-times' onClick={() => this.setState({mobileMenu:false})}></i>
            <BrowserRouter basename="/">
              <Link to='about' onClick={()=> this.props.updateNav('about')}>About Us</Link>
              <Link to='api' onClick={()=> this.props.updateNav('api')}>API</Link>
              <Link to='solutions' onClick={()=> this.props.updateNav('solutions')}>Solutions</Link>
              <Link to='case_studies' onClick={()=> this.props.updateNav('cases')}>Case Studies</Link>
              <Link to='faq' onClick={()=> this.props.updateNav('faq')}>Frequenty Asked Questions</Link>
            </BrowserRouter>
        </div>
        }
        <div className='items-right'>
          <BrowserRouter basename="/">
            <Link to='/' onClick={()=> this.props.updateNav('home')}>
              <img src='https://beam-provider-landing.s3.amazonaws.com/final/beam_logo.png' />
            </Link>
          </BrowserRouter>
          <a className={this.state.showDemoBtn ? 'cta-button' : 'cta-button-hidden'} href='#schedule-demo'>Book a Demo&nbsp;<i className='fas fa-arrow-right'></i></a>
        </div>
      </div>
    );
  }
}

export default Navbar;
