require("dotenv").config();
const development = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.DB_HOST,
  dialect: process.env.DIALECT,
  operatorsAliases: 0,
  jwtSecret: process.env.JWTSECRET,
  jwtSession: {
    session: false,
  },
};
const test = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.DB_HOST,
  dialect: process.env.DIALECT,
  operatorsAliases: 0,
  jwtSecret: process.env.JWTSECRET,
  jwtSession: {
    session: false,
  },
};
const production = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.DB_HOST,
  dialect: process.env.DIALECT,
  operatorsAliases: 0,
  jwtSecret: process.env.JWTSECRET,
  jwtSession: {
    session: false,
  },
};

module.exports = {
  development,
  test,
  production,
};
