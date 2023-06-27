/* eslint-disable no-unused-vars */
import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const initUser = (sequelize, Types) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Profile);
      models.Profile.hasMany(User);
      // User.belongsTo(models.Department);
      // models.Department.hasMany(User);

      // ClientId: Types.INTEGER,
      // OwnerId: Types.INTEGER,
      // DepartmentId: Types.INTEGER,
      // PriorityId: Types.INTEGER,
      // StatusId: Types.INTEGER,
      // this.belongsTo(models.Department, {
      //   foreignKey: "department_id",
      //   as: "department",
      // });
    }
  }
  User.init(
    {
      first_name: Types.STRING,
      last_name: Types.STRING,
      email: Types.STRING,
      ProfileId: Types.INTEGER,
      uuid: Types.STRING,
      // profile: Types.INTEGER,
      // department: Types.INTEGER,
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return User;
};

export default initUser(connection, DataTypes);

// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     first_name: DataTypes.STRING,
//     last_name: DataTypes.STRING,
//     email: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };
