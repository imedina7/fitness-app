import mongoose from 'mongoose';
import Location from '../../../model/Location.js';

export default class LocationDocument extends Location {

  static getModel() {

    /*
  
    */
    if (this.model === undefined) {
      const schema = new mongoose.Schema({
        title: {
          type: String,
          required: true 
        },
        city: {
          type: String,
          required: true
        },
        country: {
          type: String,
          required: true 
        },
        address: {
          type: String,
          required: true
        },
        geolocation: {
          type: {
            type: String,
            enum: ['Point'],
            required: true
          },
          coordinates: {
            type: [Number],
            required: true
          }
        },
        openhours: {
          type: String,
          required: true
        },
        type: {
          type: String,
          required: true
        },

      });
      this.model = mongoose.model('Location', schema, 'locations');
    }
    return this.model;
  }
  async save() {
    const LocationModel = LocationDocument.getModel();
    const newLocation = new LocationModel({
      title: this.title,
      city: this.city,
      country: this.country,
      address: this.address,
      geolocation: this.geolocation,
      openHours: this.openHours,
      type: this.type
    });
    return await newLocation.save();
  }
}