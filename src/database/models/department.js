/* eslint-disable no-unused-vars */
import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const initDepartment = (sequelize, Types) => {
  class Department extends Model {
    // static associate(models) {
    //   Department.belongsTo(models.Profile);
    //   models.Profile.hasMany(Department);
    //   // this.belongsTo(models.Department, {
    //   //   foreignKey: "department_id",
    //   //   as: "department",
    //   // });
    // }
  }
  Department.init(
    {
      department: Types.STRING,
      // last_name: Types.STRING,
      // email: Types.STRING,
      // ProfileId: Types.INTEGER,
      // profile: Types.INTEGER,
      // department: Types.INTEGER,
    },
    {
      sequelize,
      modelName: "Department",
      tableName: "departments",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Department;
};

export default initDepartment(connection, DataTypes);

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
