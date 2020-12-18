import mongoose from 'mongoose';
import config from '../config.js';

export default class DatabaseConnection {
  constructor() {
    mongoose
      .connect(config.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        this.connection = mongoose.connection;
        // eslint-disable-next-line no-console
        console.log('Connected successfuly to database.');
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error('Failed to connect: ', err);
      });
  }

  get getConnection() {
    return this.connection;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new DatabaseConnection();
    }
    return this.instance;
  }
}
