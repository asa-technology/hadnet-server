const express = require('express');
require('dotenv').config();
const app = express();
const { db } = require('../database/index')

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Connected!');
})

app.listen(port, () => console.log(`Server is listening on port ${port}`));