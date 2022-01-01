import express from 'express';
import dotenv from 'dotenv';

import routes from './routes/index.js'
import connectdb from './helpers/db.js';

//load env config
dotenv.config({path: './config/config.env'});

//database connection
connectdb();

const app = express();
const PORT = process.env.PORT || 5000;

//load routes
app.use('/', routes);

//start server
app.listen(
  PORT,
  console.log(`${process.env.NODE_ENV} server started on port ${PORT}`)
);
