const express  = require('express');
const path = require('path');
const app = express();
const port = 8080;
const puppeteer = require('puppeteer');
const {puppeteerSession} = require('./utilis/puppeteer.js');

// const executablePath = path.join(__dirname, '.cache', 'puppeteer', 'chrome', 'linux-124.0.6367.91', 'chrome-linux', 'chrome.exe');
// const fs = require('fs');


    // fs.readdir(directoryPath, (err, files) => {
    //     if (err) {
    //         console.error('Failed to list directory contents:', err);
    //     }
    //     console.log(files);
    // });


app.get('/api/v1/requestaccepted', () => {
    puppeteerSession();
    res.send('accepted');
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



