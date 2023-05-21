/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      // profile: {
      //   type: Sequelize.INTEGER,
      //   // references: {
      //   //   model: "profile",
      //   //   key: "id",
      //   // },
      //   // onDelete: "CASCADE",
      //   // onUpdate: "CASCADE",
      // },
      // department: {
      //   type: Sequelize.INTEGER,
      //   // references: {
      //   //   model: "profile",
      //   //   key: "id",
      //   // },
      //   // onDelete: "CASCADE",
      //   // onUpdate: "CASCADE",
      // },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        // defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        // defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("users");
  },
};
