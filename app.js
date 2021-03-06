// eslint-disable no-console
import express from 'express';
import constants from './config/constants';
import './config/datebase';
import middlewares from './config/middlewares';
import Routes from './routes';

const app = express();

middlewares(app);
app.use('/', Routes);

app.listen(constants.PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running on port: ${constants.PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
