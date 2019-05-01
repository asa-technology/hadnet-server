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

  //*******///////TABLES///////*******//

  //User table stores all data for Auth
  class User extends Model {};
  User.init({
      email:{
        type: sequelize.STRING,
        unique: true,
        allowNull: false,
      } ,
      display_name: {
        type: sequelize.STRING,
        allowNull: false,
      },
      account_type: {
        type: sequelize.STRING,
        allowNull: false,
      },
      google_id: {
        type: sequelize.STRING,
        allowNull: false,
      },
      url_image: {
        type: sequelize.STRING,
        allowNull: false, 
      },
  },{
    sequelize,
    modelName: 'user',
    underscored: true,
  });

  //USER
  //email: string
  //display_name: string
  //account_type (business/user): string
  //google_id: integer
  //url_image: string


  //BusinessType holds our business types
  class BusinessType extends Model {};
  BusinessType.init({
    type: {
      type: sequelize.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'businesstype',
    underscored: true,
  })

  //BUSINESSTYPE
  //type: string


  // ListingType holds our listings for the communtiy listing board
  class ListingType extends Model {};
  ListingType.init({
    type: {
      type: sequelize.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'listingtype',
    underscored: true,
  })

  //LISTINGTYPE
  //type: string

  class Business extends Model {};
  Business.init({
    name:{
      type: sequelize.STRING,
      allowNull: false,
    },
    phone_number: sequelize.INTEGER,
    email: sequelize.STRING,
    url_homepage: sequelize.STRING,
    address: {
      type: sequelize.STRING,
      allowNull: false,
    },
    latitude: sequelize.FLOAT,
    longitude: sequelize.FLOAT,
    average_rating: sequelize.INTEGER,
    legal_business_name: sequelize.STRING,
  },{
    sequelize,
    modelName: 'business',
    underscored: true,
  })
  /***************TODO**************
   * FOREIGN KEYS
   * -----------------
   * id_business_type
   * id_featured_image
   * id_user
   */

  //BUSINESS
  //name: string
  //id_business_type --> foreign key
  //phone_number: integer
  //email: string
  //url_homepage: string
  //address: string
  //id_featured_image --> foreign key
  //latitude: integer
  //longitude: integer
  //id_user: integer --> foreign key
  //average_rating: integer
  //legal_business_name: string

  //CommunityListing holds all of community listings
  class CommunityListing extends Model {};
  CommunityListing.init({
    title: {
      type: sequelize.STRING,
      allowNull: false,
    },
    body: {
      type: sequelize.STRING,
      allowNull: false,
    },
    image_url: sequelize.STRING,
    date_expire: sequelize.DATEONLY,
  },{
    sequelize,
    modelName: 'communitylisting',
    underscored: true,
  })

  /***************TODO**************
   * FOREIGN KEYS
   * -----------------
   * id_user
   * id_business
   * id_listing_type
   */

  //COMMUNITY_LISTING
  //id_user --> foreign key
  //id_business --> foreign key
  //title: string
  //body: string
  //image_url: string
  //id_listing_type: --> foreign key
  //date_expire: date

  //REVIEW
  //id_user --> foreign key
  //id_business --foreign key
  //text: string
  //rating_number: integer

  //IMAGE
  //url: string
  //id_business --> foreign key




  //*******///////HELPER FUNCTIONS///////*******//


module.exports.db = sequelize;