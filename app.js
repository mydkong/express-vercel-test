const express = require('express');
const helmet = require('helmet');
const path = require('path')

const app = express();

/*app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));*/
app.use(helmet());

app.get((req, res) => {
    let url = res.url
    if (url.test(/\/$/)) {
        url += 'index.html'
    }
    url = url.substring(1)
    //res.sendFile(path.join(__dirname, 'src', req.url.substr(1)))
    res.json([url])
})

module.exports = app;
