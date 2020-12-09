export default class Affiliate {
    constructor(firstname, lastname, address, plan){
        this.firstName = firstname;
        this.lastName = lastname;
        this.address = address;
        this.plan = plan;
    }
    get getFirstName () {
        return this.firstName;
    }

    get getLastName () {
        return this.lastName;
    }
    get getAddress() {
        return this.address;
    }
    get getFullName () {
        return `${this.firstName} ${this.lastName}`;
    }
    get getPlan () {
        return this.plan;
    }
    set setFirstName (firstname) {
        this.firstName = firstname;
    }

    set setLastName (lastname) {
        this.lastName = lastname;
    }

    set setAddress(address) {
        this.address = address;
    }
    set setPlan (plan) {
        this.plan = plan;
    }
}