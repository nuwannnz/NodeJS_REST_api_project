import appRoot from 'app-root-path';

export default {
  database: {
    uri: process.env.DB || 'add_your_dev_time_db_url'
  },
  env: process.env.NODE_ENV || 'development',
  logger: {
    errorFilePath: `${appRoot}/logs/error.log`,
    combinedFilePath: `${appRoot}/logs/combined.log`
  },
  jwt: {
    secret: process.env.JWT_SEC || 'add_your_dev_time_secret'
  }
};
