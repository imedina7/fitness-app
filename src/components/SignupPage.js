
const SignupPage = () => {
  return (
    <section>
      <h2>Sign up:</h2>
      <form onsubmit={ validateAndSave() }>
        <label for="firstname">First Name: </label>
        <input id="firstname" name="firstname" type="text"></input>

        <label for="lastname">Last Name: </label>
        <input id="lastname" name="lastname" type="text"></input>

        <label for="address">Address: </label>
        <input id="address" name="address" type="text"></input>

        <label for="plantype">Plan: </label>
        <input name="plantype" type="radio" value="basic"></input>
        <input name="plantype" type="radio" value="premium"></input>
      </form>
    </section>
  )
}
const validateAndSave = event => {
  event.preventDefault();
  console.log(event);
}
export default SignupPage;