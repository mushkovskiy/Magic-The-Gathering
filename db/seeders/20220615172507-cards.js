module.exports = {

  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [{
      title: 'Platinum Angel',
      url: '/',
      price: 50,
      condition: 'new',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Dark Side',
      url: '/',
      price: 70,
      condition: 'new',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Primeval Titan',
      url: '/',
      price: 80,
      condition: 'new',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Primeval Titan',
      url: '/',
      price: 80,
      condition: 'new',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Cards', null, { restartIdentity: true, truncate: true });
  },
};
