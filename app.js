const express = require('express');
const helmet = require('helmet');
const { ErrorResponseObject } = require('./common/http');
import path from 'path'

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(helmet());
app.use(express.static('src'));
app.get('/', (req, res) => {
    res.sendFile(path.join('src', req.url.substr(1)))
})

module.exports = app;
