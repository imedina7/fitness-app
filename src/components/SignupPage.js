
const SignupPage = () => {
  return (
    <section className="signup-modal">
      <h2>Sign up:</h2>
      <form onSubmit={ validateAndSave }>
        <label htmlFor="firstname">First Name: </label>
        <input id="firstname" name="firstname" type="text"></input>

        <label htmlFor="lastname">Last Name: </label>
        <input id="lastname" name="lastname" type="text"></input>

        <label htmlFor="address">Address: </label>
        <input id="address" name="address" type="text"></input>

        <label htmlFor="plantype">Plan: </label>
        <input name="plantype" type="radio" value="basic"></input>
        <input name="plantype" type="radio" value="premium"></input>
        <button>Submit</button>
      </form>
    </section>
  )
}
const validateAndSave = event => {
  event.preventDefault();
  console.log(event);
}
export default SignupPage;