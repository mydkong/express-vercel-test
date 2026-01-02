const express = require('express');
const helmet = require('helmet');
const path = require('path')
const fs = require('fs')

const app = express();

/*app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));*/

app.use(helmet());

app.use('/', (req, res) => {
    let url = req.url

    if (/\/$/.test(url)) {
        url = url.substring(0, url.length - 1)
    }
    if (!/[A-Za-z0-9\-_]*\.[A-Za-z0-9\-_]*$/.test(url)) {
        url += '/index.html'
    }

    url = url.substring(1)

    fs.readFile(path.join(__dirname, url), 'utf-8', (err, data) => {
        if (err) {
            res.status(500).sendFile(path.join(__dirname, path.join('errors', '500.html')))
        }
    })
})

module.exports = app;
