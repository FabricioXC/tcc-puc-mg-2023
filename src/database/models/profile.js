/* eslint-disable no-unused-vars */
import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const initProfile = (sequelize, Types) => {
  class Profile extends Model {}
  Profile.init(
    {
      profile: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Profile",
      tableName: "profiles",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Profile;
};

export default initProfile(connection, DataTypes);

// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//   class Profile extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Profile.init(
//     {
//       profile: DataTypes.STRING,
//     },
//     {
//       sequelize,
//       modelName: "Profile",
//     }
//   );
//   return Profile;
// };
