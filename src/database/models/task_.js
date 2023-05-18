/* eslint-disable no-unused-vars */
import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const initTask = (sequelize, Types) => {
  class Task extends Model {}
  Task.init(
    {
      user_id: Types.INTEGER,
      title: Types.STRING,
      description: Types.STRING,
      completed: Types.BOOLEAN,
      expires_at: Types.STRING,
    },
    {
      sequelize,
      modelName: "Task",
      tableName: "task",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Task;
};

export default initTask(connection, DataTypes);

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
