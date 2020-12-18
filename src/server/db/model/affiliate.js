import mongoose from 'mongoose';
import Affiliate from '../../../model/Affiliate.js';

export default class AffiliateDocument extends Affiliate {
  static getModel() {
    if (this.model === undefined) {
      const schema = new mongoose.Schema({
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
        address: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        plan: {
          type: String,
          enum: ['basic', 'premium'],
          required: true,
        },
      });
      schema
        .path('email')
        .validate((value) =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value,
          ),
        );
      this.model = mongoose.model('Affiliate', schema, 'affiliates');
    }
    return this.model;
  }

  async save() {
    const AffiliateModel = AffiliateDocument.getModel();
    const newAffiliate = new AffiliateModel({
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      email: this.email,
      plan: this.plan,
    });
    return newAffiliate.save();
  }
}
