'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Настя',
      login: 'Nastya',
      password: '123456',
      email: 'nastya@mail.ru',
      city: 'Санкт-Петербург',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Женя',
      login: 'Jack',
      password: '123456',
      email: 'john@mail.ru',
      city: 'Сочи',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Ира',
      login: 'Iran',
      password: '123456',
      email: 'iran@mail.ru',
      city: 'Москва',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Павел',
      login: 'Pavlik',
      password: '123456',
      email: 'pavlik@mail.ru',
      city: 'Краснодар',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Петя',
      login: 'Pit',
      password: '123456',
      email: 'pit@mail.ru',
      city: 'Мурманск',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Леха',
      login: 'Lexa',
      password: '123456',
      email: 'lexa@mail.ru',
      city: 'Нерюнгри',
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
    await queryInterface.bulkDelete('Users', null, { restartIdentity: true, truncate: true });
  },
};
