import apiclient from './apiclient';

export const formEvents = {
  submitSignupForm(e) {
    e.preventDefault();
    const client = apiclient();

    client
      .newAffiliate(this.state)
      .then(() => {
        console.log('New affiliate request sent');
      })
      .catch((err) => {
        console.error(err);
      });
  },
};

export const appEvents = {};
