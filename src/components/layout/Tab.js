import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
        closeable,
        onClose
      },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <li
        className={className}
        onClick={onClick}
      >
        {label}
        {( closeable ) ? (<span onClick={ onClose.bind(this) } className="tab-close-btn">x</span>) : ''}
      </li>
    );
  }
}

export default Tab;