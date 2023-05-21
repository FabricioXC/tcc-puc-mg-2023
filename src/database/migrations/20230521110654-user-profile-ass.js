"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("users", {
      fields: ["ProfileId"],
      type: "foreign key",
      name: "user_profile_association",
      references: {
        //Required field{
        table: "profiles",
        field: "id",
      },
    });

    await queryInterface.bulkInsert(
      "users",
      [
        {
          ProfileId: 1,
          first_name: "Fabricio",
          last_name: "Chiaradia",
          email: "fabricioxc@gmail.com",
        },
      ],
      {}
    );

    await queryInterface.addConstraint("tasks", {
      fields: ["UserId"],
      type: "foreign key",
      name: "task_user_association",
      references: {
        //Required field{
        table: "users",
        field: "id",
      },
    });

    await queryInterface.addConstraint("tasks", {
      fields: ["DepartmentId"],
      type: "foreign key",
      name: "task_department_association",
      references: {
        //Required field{
        table: "departments",
        field: "id",
      },
    });

    await queryInterface.addConstraint("tasks", {
      fields: ["PriorityId"],
      type: "foreign key",
      name: "task_priority_association",
      references: {
        //Required field{
        table: "priorities",
        field: "id",
      },
    });

    await queryInterface.addConstraint("tasks", {
      fields: ["StatusId"],
      type: "foreign key",
      name: "task_status_association",
      references: {
        //Required field{
        table: "status",
        field: "id",
      },
    });

    // await queryInterface.addConstraint("tasks", [
    //   {
    //     fields: ["UserId"],
    //     type: "foreign key",
    //     name: "task_user_association",
    //     references: {
    //       //Required field{
    //       table: "users",
    //       field: "id",
    //     },
    //   },
    //   {
    //     fields: ["DepartmentId"],
    //     type: "foreign key",
    //     name: "task_department_association",
    //     references: {
    //       //Required field{
    //       table: "departments",
    //       field: "id",
    //     },
    //   },
    //   {
    //     fields: ["PriorityId"],
    //     type: "foreign key",
    //     name: "task_priority_association",
    //     references: {
    //       //Required field{
    //       table: "priorities",
    //       field: "id",
    //     },
    //   },
    //   {
    //     fields: ["StatusId"],
    //     type: "foreign key",
    //     name: "task_status_association",
    //     references: {
    //       //Required field{
    //       table: "status",
    //       field: "id",
    //     },
    //   },
    // ]);

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
