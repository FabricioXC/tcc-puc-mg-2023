/* eslint-disable no-unused-vars */
import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const initPriority = (sequelize, Types) => {
  class Priority extends Model {
    // static associate(models) {
    //   Priority.belongsTo(models.Profile);
    //   models.Profile.hasMany(Priority);
    //   // this.belongsTo(models.Priority, {
    //   //   foreignKey: "department_id",
    //   //   as: "department",
    //   // });
    // }
  }
  Priority.init(
    {
      priority: Types.STRING,
      // last_name: Types.STRING,
      // email: Types.STRING,
      // ProfileId: Types.INTEGER,
      // profile: Types.INTEGER,
      // department: Types.INTEGER,
    },
    {
      sequelize,
      modelName: "Priority",
      tableName: "priorities",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Priority;
};

export default initPriority(connection, DataTypes);

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
