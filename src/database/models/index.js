import User from "./user";
import Task from "./task";
import Profile from "./profile";

User.hasMany(Task, {
  foreignKey: "user_id",
  as: "tasks",
});

Task.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
});

Profile.belongsToMany(User, {
  through: "profile",
  foreignKey: "id",
  otherKey: "id",
});
User.sync();
Task.sync();
Profile.sync();
export { User, Task, Profile };
