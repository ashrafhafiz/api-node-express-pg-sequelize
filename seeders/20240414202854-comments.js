"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "comments",
      [
        {
          body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, consequuntur!",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
        },
        {
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, ratione.",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
        },
        {
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete("comments", null, {});
  },
};
