require('dotenv').config();
const Sequelize = require('sequelize');
const express = require('express');
const app = express();

const {
    MASTER_USERNAME,
    MASTER_PASSWORD,
    DB_NAME,
    DB_PORT,
    DB_ENDPOINT,
} = process.env;

const sequelize = new Sequelize(
    DB_NAME,
    MASTER_USERNAME,
    MASTER_PASSWORD,
    {
    host: DB_ENDPOINT,
    dialect: 'postgres',
    port: DB_PORT,
    },
);

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

  ///////
  //ACCOUNT
  //username: string
  //password: string
  //salt: integer
  //account_type (business/user): string

  //BUSINESS
  //name: string
  //business_type: string
  //phone_number: integer
  //email: string
  //business_url: string
  //image_url: string
  //address: string
  //latitude: integer
  //longitude: integer
  //average_rating: integer
  //verified: boolean
  //legal_business_name: string
  //account_id --> foreign key

  //USER
  //account_id --> foreign key
  //display_name: string
  //email: string
  //image_url: string

  //REVIEW
  //user_id --> foreign key
  //business_id --foreign key
  //text: string
  //rating: integer


module.exports.db = sequelize;