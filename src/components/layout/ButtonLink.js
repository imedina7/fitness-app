import { Link } from 'react-router-dom';
import './ButtonLink.css';

const ButtonLink = (props) => {
  const {url, type, title} = props;
  const buttonClass = (type !== undefined) ? `${type}-btn` : 'primary-btn';

  return (
    <Link to={ url }>
      <button className={ buttonClass }>
        { title }
      </button>
    </Link>
  )
}

export default ButtonLink;