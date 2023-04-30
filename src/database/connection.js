import Sequelize from "sequelize";
import config from "./config/config.mjs";

let sequelize;
// if (process.env.NODE_ENV === "production") {
//   sequelize = new Sequelize(config.production);
//   console.log("Production mode");
// } else if (process.env.NODE_ENV === "staging") {
//   sequelize = new Sequelize(config.staging);
//   console.log("Staging mode");
// } else if (process.env.NODE_ENV === "test") {
//   console.log("Test mode");
//   sequelize = new Sequelize(config.test);
// } else {
//   sequelize = new Sequelize(config.development);
//   console.log("Development mode");
// }
const DB_USERNAME = "sql9614938";
const DB_PASSWORD = "waxNAcz2tV";
const DB_NAME = "sql9614938";
const DB_HOSTNAME = "sql9.freemysqlhosting.net";
const DB_PORT = "3306";
sequelize = new Sequelize({
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_HOSTNAME,
  port: DB_PORT,
  logging: false,
  dialect: "mysql",
});

const connection = sequelize;

export default connection;
