const express  = require('express');
const path = require('path');
const app = express();
const port = 8080;
const puppeteer = require('puppeteer');
const executablePath = path.join(__dirname, '.cache', 'puppeteer', 'chrome', 'linux-124.0.6367.91', 'chrome-linux', 'chrome.exe');
const fs = require('fs');
const directoryPath = path.join(__dirname, '.cache', 'puppeteer', 'chrome');


    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Failed to list directory contents:', err);
            return res.status(500).send('Failed to list directory contents');
        }
        console.log(files);
    });



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// const puppeteerSession = async () => {
//     try {
//         const browserInstance = await puppeteer.launch({
//             headless:true,
//             executablePath,
//         });
//         const page = await browserInstance.newPage();
//         await page.goto('https://en.wikipedia.org/wiki/Ram_Charan', { waitUntil: 'networkidle0' });
//         const items = await page.evaluate(() => {
//             const paragraphs = Array.from(document.querySelectorAll('p')); // Convert NodeList to Array
//             return paragraphs.map(p => p.innerText); // Map over the array to return innerText of each paragraph
//         });
//         console.log(items.length);
        
    
//     } catch(err) {
//     console.log(err);
//     }
// }


// puppeteerSession();
