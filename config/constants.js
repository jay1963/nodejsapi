const defaultConfig = {
  PORT: process.env.PORT || 4002,
};

const config = {
  development: {
    DB_URL: 'mongodb://localhost/react-admin-dev',
    JWT_SECRET: 'reactadmin',
  },
  production: {
    DB_URL: 'mongodb://localhost/react-admin-prod',
  },
};

function getEnv(env) {
  return config[env];
}

export default {
  ...defaultConfig,
  ...getEnv(process.env.NODE_ENV),
};
