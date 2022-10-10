const { Sequelize, DataTypes, Op } = require('sequelize');

const sequelize = new Sequelize(
  'postgres',
  'postgres', 
  'docker',
{
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;