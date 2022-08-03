import './Styles/Main.scss';
import React, { useState, useEffect } from "react";
import {BrowserRouter, Link} from "react-router-dom";
import ClickOutside from 'react-click-outside';

class ResourcesModal extends React.Component {


  render() {
    return(
      <div className='resource-modal'>
        <i className='fas fa-times' onClick={() => this.props.toggleResourcesModal()}></i>
        <div className='modal-menu'>
          <BrowserRouter basename="/">
            {/* <Link to='blog' onClick={()=> this.props.updateNav('blog')}>Blog</Link> */}
            <Link to='case_studies' onClick={()=> this.props.updateNav('cases')}>Case Studies</Link>
            <Link to='faq' onClick={()=> this.props.updateNav('faq')}>Frequenty Asked Questions</Link>
          </BrowserRouter>
        </div>
      </div>
    )
  }
}

export default ResourcesModal;
