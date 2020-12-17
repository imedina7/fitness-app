import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Modal.css';

export class Modal extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
  }
  render() {
    const { title, children } = this.props;
    
    return (
      <div className="backdrop">
        <div className="modal">
          <span onClick={ this.props.onClose }>Close</span>
          <h3>{ title }</h3>
          { children }
        </div>
      </div>
    )
  }
}

export default Modal