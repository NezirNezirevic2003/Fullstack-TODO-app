require("dotenv").config();
const Pool = require("pg").Pool;

const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const HOST = process.env.HOST;
const DBPORT = process.env.DBPORT;
const DATABASE = process.env.DATABASE;

const pool = new Pool({
  user: USER,
  password: PASSWORD,
  host: HOST,
  port: DBPORT,
  database: DATABASE,
});

module.exports = pool;
