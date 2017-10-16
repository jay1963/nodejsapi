const defaultConfig = {
  PORT: process.env.PORT || 4002,
};

const config = {
  development: {
    DB_URL: 'mongodb://localhost/nodejs-admin-dev',
    JWT_SECRET: 'nodejsadmin',
  },
  production: {
    DB_URL: 'mongodb://localhost/nodejs-admin-prod',
  },
};

function getEnv(env) {
  return config[env];
}

export default {
  ...defaultConfig,
  ...getEnv(process.env.NODE_ENV),
};
