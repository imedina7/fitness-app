import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonLink.css';

const ButtonLink = (props) => {
  const { url, type, title } = props;
  const buttonClass = type !== undefined ? `${type}-btn` : 'primary-btn';

  return (
    <Link to={url} data-testid="link-btn">
      <button className={buttonClass} type="button">
        {title}
      </button>
    </Link>
  );
};

export default ButtonLink;
