const express = require('express');
require('dotenv').config();
const app = express();
const { db } = require('../database/index');
const port = process.env.PORT || 3000;

//routers
const auth = require('./auth');
const businesses = require('./businesses');
const community = require('./community');

// authentication route
app.use('/auth', auth);

// businesses route
app.use('/businesses', businesses)

// community route
app.use('/community', community);

app.listen(port, () => console.log(`Server is listening on port ${port}`));