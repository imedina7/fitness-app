import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  onClick = (e) => {
    e.stopPropagation();
    const { label, onClick } = this.props;
    onClick(label, e);
  };

  handleKeyPress = () => {};

  render() {
    const {
      onClick,
      handleKeyPress,
      props: { activeTab, label },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      <li className={className} onClick={onClick} onKeyPress={handleKeyPress}>
        {label}
      </li>
    );
  }
}

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
