import { Link } from 'react-router-dom';

const Button = (props) => {
  const {url, type, title} = props;
  const classes = (type !== undefined) ? `button ${type}` : 'button';

  return (
    <Link to={ url } className={ classes }
    >
      { title }
    </Link>
  )
}

export default Button;