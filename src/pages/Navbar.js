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
            <Link to='/'>
              <img src='https://beam-provider-landing.s3.amazonaws.com/final/beam_logo.png' />
            </Link>
            <Link to='/about'>About Us</Link>
            <Link to='/api'>API</Link>
            <Link to='/solutions'>Solutions</Link>
            <Link to='/faq'>FAQ</Link>
          <div onClick={() => this.toggleResourcesModal()}>Resources&nbsp;<i className='fas fa-chevron-down'></i></div>
        </div>
        <div className='mobile-nav'>
          <i className='fas fa-bars' onClick={() => this.setState({mobileMenu:true})}></i>
        </div>
        {this.state.mobileMenu &&
        <div className='mobile-overlay'>
          <i className='fas fa-times' onClick={() => this.setState({mobileMenu:false})}></i>
            <Link to='/about'>About Us</Link>
            <Link to='/api'>API</Link>
            <Link to='/solutions'>Solutions</Link>
            <Link to='/case_studies'>Case Studies</Link>
            <Link to='/faq'>Frequenty Asked Questions</Link>
            <a href="https://blog.beam.health" target="_blank">Blog</a>
            <a href="https://careers.beam.health" target="_blank">Careers</a>
        </div>
        }
        <div className='items-right'>
          <Link to='/'>
            <img src='https://beam-provider-landing.s3.amazonaws.com/final/beam_logo.png' />
          </Link>
          <a className={this.state.showDemoBtn ? 'cta-button' : 'cta-button-hidden'} href='#schedule-demo'>Book Demo&nbsp;<i className='fas fa-arrow-right'></i></a>
        </div>
      </div>
    );
  }
}

export default Navbar;
