const express = require('express');
const path = require('path')
const fs = require('fs')

const app = express();

app.use('/', (req, res) => {
    let url = req.url

    if (/\/$/.test(url)) {
        url = url.substring(0, url.length - 1)
    }
    if (!/[A-Za-z0-9\-_]*\.[A-Za-z0-9\-_]*$/.test(url)) {
        url += '/index.html'
    }

    url = url.substring(1)

    fs.readFile(path.join(__dirname, path.join('public/src', url)), 'utf-8', (err, data) => {
        if (err) {
            res.status(500).sendFile(path.join(__dirname, 'public/errors/500.html'))
            return false;
        }

        res.status(200).send(data)
    })
})

module.exports = app;
