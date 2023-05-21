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
      // ProfileId: {
      //   type: Sequelize.INTEGER,

      //   references: {
      //     model: "profiles",
      //     key: "id",
      //   },
      //   onDelete: "CASCADE",
      // },
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

    await queryInterface.createTable("tasks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      // user_id: {
      //   type: Sequelize.INTEGER,

      //   references: {
      //     model: "users",
      //     key: "id",
      //   },
      //   onDelete: "CASCADE",
      // },
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      completed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      expires_at: {
        type: Sequelize.STRING,
      },
      create_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.createTable("profiles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,

        type: Sequelize.INTEGER,
      },
      profile: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable("users");
  },
};
