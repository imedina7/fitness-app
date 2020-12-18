export default class Affiliate {
  constructor(firstname, lastname, address, email, plan) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.address = address;
    this.email = email;
    this.plan = plan;
  }

  get getFirstName() {
    return this.firstName;
  }

  get getLastName() {
    return this.lastName;
  }

  get getAddress() {
    return this.address;
  }

  get getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get getPlan() {
    return this.plan;
  }

  set setFirstName(firstname) {
    this.firstName = firstname;
  }

  set setLastName(lastname) {
    this.lastName = lastname;
  }

  set setAddress(address) {
    this.address = address;
  }

  set setPlan(plan) {
    this.plan = plan;
  }
}
