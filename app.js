const express = require('express');
const helmet = require('helmet');
const { ErrorResponseObject } = require('./common/http');
const path = require('path')

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(helmet());
//app.use(express.static('src'));
app.get((req, res) => {
    let url = res.url
    if (url.test(/\/$/)) {
        url += 'index.html'
    }
    //res.sendFile(path.join(__dirname, 'src', req.url.substr(1)))
    res.json(path.join(__dirname, 'src', url.substr(1)))
})

module.exports = app;
