import express from 'express';
import bodyParser from 'body-parser';

import { connect } from './services/dbService';

import addData from './api/addData';
import getLastBlocks from './api/getLastBlocks';

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/add_data', addData);
app.get('/last_blocks/:size', getLastBlocks);

connect('./database.sqlite');

app.listen(port, () => console.log(`App started on port ${port}!`))
