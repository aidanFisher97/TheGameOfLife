require('dotenv').config();
const express = require('express');
const router = require('./router/router.js');
const controller = require('./controller/controller.js');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route requests
app.use(router);

// listen on ports
