//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Importing the comments array
const comments = require('./data/comments');

//Importing the contacts array
const contacts = require('./data/contacts');

//Importing the products array
const products = require('./data/products');

//Im