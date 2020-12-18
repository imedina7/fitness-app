export default class Location {
  constructor(title, city, country, address, geolocation, type, openhours) {
    this.title = title;
    this.city = city;
    this.country = country;
    this.address = address;
    this.geolocation = geolocation;
    this.openHours = openhours;
    this.type = type;
  }

  get getId() {
    return this._id;
  }

  get getTitle() {
    return this.title;
  }

  set setTitle(title) {
    this.title = title;
  }

  get getCity() {
    return this.city;
  }

  set setCity(city) {
    this.city = city;
  }

  get getCountry() {
    return this.country;
  }

  set setCountry(country) {
    this.country = country;
  }

  get getAddress() {
    return this.address;
  }

  set setAddress(address) {
    this.address = address;
  }

  get getGeolocation() {
    return this.geolocation;
  }

  set setGeolocation(geolocation) {
    this.geolocation = geolocation;
  }

  get getOpenHours() {
    return this.openhours;
  }

  set setOpenHours(openhours) {
    this.openhours = openhours;
  }

  get getType() {
    return this.type;
  }

  set setType(type) {
    this.type = type;
  }
}
