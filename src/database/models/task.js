import { Model, DataTypes } from "sequelize";
import connection from "../connection";

const initTask = (sequelize, Types) => {
  class Task extends Model {
    static associate(models) {
      Task.belongsTo(models.User);
      models.user.hasMany(Task);
      Task.belongsTo(models.Department);
      models.Department.hasMany(Task);
      Task.belongsTo(models.Priority);
      models.Priority.hasMany(Task);
      Task.belongsTo(models.Status);
      models.Status.hasMany(Task);
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
  Task.init(
    {
      // ClientId: Types.INTEGER,
      UserId: Types.INTEGER,
      DepartmentId: Types.INTEGER,
      PriorityId: Types.INTEGER,
      StatusId: Types.INTEGER,
      title: Types.STRING,
      description: Types.STRING,
      info: Types.STRING,
    },
    {
      sequelize,
      modelName: "Task",
      tableName: "tasks",
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
