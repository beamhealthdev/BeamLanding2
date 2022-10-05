import './Styles/Main.scss';
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

class ResourcesModal extends React.Component {


  render() {
    return(
      <div className='resource-modal'>
        <i className='fas fa-times' onClick={() => this.props.toggleResourcesModal()}></i>
        <div className='modal-menu'>
          <a href="https://blog.beam.health" target="_blank">Blog</a>
          <Link to='case_studies' onClick={() => this.props.toggleResourcesModal()}>Case Studies</Link>
          <a href="https://careers.beam.health" target="_blank">Careers</a>
        </div>
      </div>
    )
  }
}

export default ResourcesModal;
