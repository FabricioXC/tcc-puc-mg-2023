"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      queryInterface.addColumn(
        "users", // table name
        "profile", // new field name
        {
          type: Sequelize.STRING,
          allowNull: false,
        }
      ),
      // queryInterface.addColumn(
      //   'users',
      //   'linkedin',
      //   {
      //     type: Sequelize.STRING,
      //     allowNull: true,
      //   },
      // ),
      // queryInterface.addColumn(
      //   'users',
      //   'bio',
      //   {
      //     type: Sequelize.TEXT,
      //     allowNull: true,
      //   },
      // ),
    ]);
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
