import User from "./user";
import Task from "./task";
import Profile from "./profile";
import Priority from "./priority";
import Department from "./department";
import Status from "./status";

// User.hasMany(Task, {
//   foreignKey: "task_id",
//   as: "task",
// });

// Task.belongsTo(User, {
//   foreignKey: "user_id",
//   as: "user",
// });

User.hasMany(Task);
Task.belongsTo(Profile, {
  through: "first_name",
  foreignKey: "UserId",
  otherKey: "id",
});

Department.hasMany(Task);
Task.belongsTo(Department, {
  through: "depatment",
  foreignKey: "DepartmentId",
  otherKey: "id",
});

Priority.hasMany(Task);
Task.belongsTo(Priority, {
  through: "priority",
  foreignKey: "PriorityId",
  otherKey: "id",
});

Status.hasMany(Task);
Task.belongsTo(Status, {
  through: "status",
  foreignKey: "StatusId",
  otherKey: "id",
});

Profile.hasMany(User);
User.belongsTo(Profile, {
  through: "profile",
  foreignKey: "ProfileId",
  otherKey: "id",
});

export { User, Task, Profile, Priority, Department, Status };
