import express from 'express';
import dotenv from 'dotenv';

import routes from './routes/index.js'
import connectdb from './helpers/db.js';

//load env config
dotenv.config({ path: './config/config.env' });

//database connection
connectdb();

//configure express
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()) // To parse the incoming requests with JSON payloads

//load routes
app.use('/', routes);

//start server
app.listen(
  PORT,
  console.log(`${process.env.NODE_ENV} server started on port ${PORT}`)
);

//uncaught exception handling
process.on('uncaughtException', function (err) {
  console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
  console.error(err.stack)
  process.exit(1)
});