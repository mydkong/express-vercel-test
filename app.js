const express = require('express');
const helmet = require('helmet');
const { ErrorResponseObject } = require('./common/http');

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(helmet());
app.use(express.static('src'));

module.exports = app;
