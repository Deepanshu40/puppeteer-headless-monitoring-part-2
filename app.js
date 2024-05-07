const express  = require('express');
const path = require('path');
const app = express();
const port = 8080;
const puppeteer = require('puppeteer');
const executablePath = path.join(__dirname, '.cache', 'puppeteer', 'chrome', 'linux-124.0.6367.91', 'chrome-linux', 'chrome.exe');


async function findExecutablePath() {
    const browser = await puppeteer.launch(); // Launch the browser using default or configured settings
    console.log('Chrome Executable Path:', browser.executablePath()); // Logs the path to the Chrome executable used by Puppeteer

    await browser.close(); // Always remember to close the browser
}

findExecutablePath();

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
