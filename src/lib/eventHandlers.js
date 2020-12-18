import apiclient from './apiclient';

const client = apiclient();

export const formEvents = {
  async submitSignupForm(affiliate) {
    await client.newAffiliate(affiliate);
  },
};

export const appEvents = {};

export const adminEvents = {
  async submitNewLocation(location) {
    await client.newLocation(location);
  },
  async deleteAffiliate(id) {
    await client.deleteAffiliate(id);
  },
  async deleteLocation(id) {
    await client.deleteLocation(id);
  },
};
