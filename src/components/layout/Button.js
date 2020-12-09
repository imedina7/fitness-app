const Button = (props) => {
  const {url, type, title} = props;
  const classes = (type !== undefined) ? `button ${type}` : 'button';

  return (
    <a href={ url } class={ classes }
    >
      { title }
    </a>
  )
}

export default Button;