/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

function Modal({ title, children, onClose }) {
  return (
    <div className="backdrop">
      <div className="modal">
        <span onClick={onClose}>Close</span>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Modal;
