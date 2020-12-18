// eslint-disable-next-line no-underscore-dangle
import express from 'express';
import cors from 'cors';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import config from './config.js';

import ApiRouterV1 from './api/v1/router.js';

import DatabaseConnection from './db/DatabaseConnection.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

const whitelist = [
  'http://localhost:5000',
  'http://localhost:3000',
  `https://${config.HEROKU_APP_NAME}.herokuapp.com`,
];

app.use(
  cors({
    origin(origin, callback) {
      // allow requests with no origin
      if (!origin) return callback(null, true);
      if (whitelist.indexOf(origin) === -1) {
        const message =
          "The CORS policy for this origin doesn't " +
          'allow access from the particular origin.';
        return callback(new Error(message), false);
      }
      return callback(null, true);
    },
  }),
);
app.use(express.json());

app.use('/', express.static(join(__dirname, '/../../build')));

DatabaseConnection.getInstance();

app.use('/api/v1', ApiRouterV1());

app.get('/*', (req, res) => {
  res.sendFile(join(__dirname, '/../../build/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(config.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App started on port: ${config.PORT}`);
});
