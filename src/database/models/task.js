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
//   class Task extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Task.init({
//     user_id: DataTypes.INTEGER,
//     title: DataTypes.STRING,
//     description: DataTypes.STRING,
//     completed: DataTypes.BOOLEAN,
//     expires_at: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Task',
//   });
//   return Task;
// };

// /* eslint-disable no-unused-vars */
// import { Model, DataTypes } from "sequelize";
// import connection from "../connection";
