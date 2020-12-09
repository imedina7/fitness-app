import express from 'express';
import config from './config.js';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use('/', express.static( __dirname + '/../../build'));

app.listen(config.PORT, () => {
    console.log(`App started on port: ${config.PORT}`);
});
