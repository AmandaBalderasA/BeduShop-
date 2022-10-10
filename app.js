const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const sequelize = require('./config/db');
const PORT = 4001;

const app = express();
app.use('/', require('./routes'));

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/' , require('./routes'));