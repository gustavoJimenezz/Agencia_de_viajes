'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tourist-destinations', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      img: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tourist-destinations');
  }
};
