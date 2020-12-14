import {model, Schema} from 'mongoose';
import Affiliate from '../../../model/Affiliate';

export default class AffiliateDocument extends Affiliate {

  get getModel() {
    if (this.model === undefined) {
      const schema = new Schema({
        firstName: {
          type: String,
          required: true 
        },
        lastName: {
          type: String,
          required: true
        },
        address: {
          type: String,
          required: true 
        },
        email: {
          type: String,
          required: true,
          validate: {
            validator: () => { 
              return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email) 
            }
          }
        },
        plan: {
          type: String,
          enum: ['basic', 'premium'],
          required: true
        }
      });
      this.model = model(schema);
    }
    return this.model;
  }
}