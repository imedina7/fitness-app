import express from 'express';
import config from './config.js';

import ApiRouterV1 from './api/v1/router.js';

import DatabaseConnection from './db/DatabaseConnection.js';

import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json());

app.use('/', express.static( join(__dirname, '/../../build')));

DatabaseConnection.getInstance();

app.use('/api/v1', ApiRouterV1());

app.listen(config.PORT, () => {
    console.log(`App started on port: ${config.PORT}`);
});
