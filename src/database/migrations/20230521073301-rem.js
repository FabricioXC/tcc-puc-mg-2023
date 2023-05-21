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
  },

  down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn("users", "profile"),
      // queryInterface.removeColumn('tableName', 'custom_entity_field_id'),
    ]);
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
