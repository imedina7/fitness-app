export default class Location {
    constructor (city, country, address, geolocation, type, openhours) {
        this.city = city;
        this.country = country;
        this.address = address;
        this.geolocation = geolocation;
        this.openHours = openhours;
        this.type = type;
    }
}