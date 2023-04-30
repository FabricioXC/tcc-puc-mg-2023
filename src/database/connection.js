import Sequelize from "sequelize";
import config from "./config/config.mjs";

let sequelize;
if (process.env.NODE_ENV === "production") {
  sequelize = new Sequelize(config.production);
  console.log("Production mode");
} else if (process.env.NODE_ENV === "staging") {
  sequelize = new Sequelize(config.staging);
  console.log("Staging mode");
} else if (process.env.NODE_ENV === "test") {
  console.log("Test mode");
  sequelize = new Sequelize(config.test);
} else {
  sequelize = new Sequelize(config.development);
  console.log("Development mode");
}

const connection = sequelize;

export default connection;
