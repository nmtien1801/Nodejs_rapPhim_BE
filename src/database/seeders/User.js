"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "User",
      [
        {
          email: "testSeed@gmail.com",
          passWord: "1234",
          userName: "fake2",
          address: "HN",
          sex: "Male",
          phone: "0123456985",
          groupID: 2, // guest -> khách hàng
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
