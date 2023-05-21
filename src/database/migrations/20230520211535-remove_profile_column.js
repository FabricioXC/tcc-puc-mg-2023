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
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn("user", "profile", { transaction: t }),
      ]);
    });
  },
};
// down: (queryInterface, Sequelize) => {
//   return queryInterface.sequelize.transaction(t => {
//     return Promise.all([
//       queryInterface.removeColumn('Person', 'petName', { transaction: t }),
//       queryInterface.removeColumn('Person', 'favoriteColor', { transaction: t })
//     ]);
//   });
// }
