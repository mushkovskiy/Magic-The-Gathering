module.exports = {

  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [{
      title: 'Библиотечная Воровка',
      url: 'https://c1.scryfall.com/file/scryfall-cards/large/front/8/8/88707358-5a2e-4246-ba26-d819b3b864b1.jpg?1645815335',
      price: 50,
      condition: 'new',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Загнанный Кит',
      url: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/1/0/10ba216c-b116-4e2b-bd1f-336a697ba8a8.jpg?1646323553',
      price: 70,
      condition: 'new',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Закаленный Ветеран',
      url: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/7/d/7d5268b9-0376-4189-8c32-541807ba2e14.jpg?1645815185',
      price: 80,
      condition: 'new',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Краб Монеток',
      url: 'https://c1.scryfall.com/file/scryfall-cards/large/front/4/0/402b2b3b-caa8-4556-b3ea-304cb204a73b.jpg?1645815648',
      price: 80,
      condition: 'new',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Кровавый Обжора',
      url: 'https://c1.scryfall.com/file/scryfall-cards/normal/front/f/d/fd4d04b3-f3b9-4e77-8fd8-ece2bace0b77.jpg?1645815699',
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
