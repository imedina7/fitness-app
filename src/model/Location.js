export default class Location {
    constructor (id, city, country, address, geolocation, type, openhours) {
        this._id = id;
        this.city = city;
        this.country = country;
        this.address = address;
        this.geolocation = geolocation;
        this.openHours = openhours;
        this.type = type;
    }
}