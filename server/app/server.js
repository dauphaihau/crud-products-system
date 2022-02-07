const express = require('express');
const router = require('./routes');
const cors = require('cors');
const app = express();
const port = 1111;

app.use(express.json())

app.use(cors());

app.use(router)

app.listen(port, () => console.log(`example app listening at http://localhost:${port}`))

// setup sequelize
const {sequelize} = require('./model');
sequelize.sync({alter: true});