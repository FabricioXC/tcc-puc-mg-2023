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

  async down(queryInterface, Sequelize) {
    await queryInterface
      .removeColumn(
        "User", // name of Source model
        "profile" // key we want to remove
      )
      .then((d) => {
        console.log("Response Sequelize: ", d);
      })
      .catch((e) => {
        console.log("Sequelize Error: ", e);
      });
  },
};
