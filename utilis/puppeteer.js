const path = require('path');
const puppeteer = require('puppeteer'); 
const prodExecutablePath = path.join(__dirname, '..', '.cache', 'puppeteer', 'chrome', 'linux-124.0.6367.91', 'chrome-linux64', 'chrome');
const devExecutablePath = path.join(__dirname, '..', '.cache', 'puppeteer', 'chrome', 'win64-124.0.6367.91', 'chrome-win64', 'chrome.exe');

const directoryPath = path.join(__dirname, '.cache');
const fs = require('fs');


    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Failed to list directory contents:', err);
        }
        console.log(files);
    });



module.exports.puppeteerSession = async () => {

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error('Failed to list directory contents:', err);
        }
        console.log(files);
    });

    
    // try {
    //     const browserInstance = await puppeteer.launch({
    //         headless:true,
    //         executablePath:prodExecutablePath,
    //     });
    //     const page = await browserInstance.newPage();
    //     await page.goto('https://en.wikipedia.org/wiki/Ram_Charan', { waitUntil: 'networkidle0' });
    //     const items = await page.evaluate(() => {
    //         const paragraphs = Array.from(document.querySelectorAll('p')); // Convert NodeList to Array
    //         return paragraphs.map(p => p.innerText); // Map over the array to return innerText of each paragraph
    //     });
    //     console.log(items.length);
        
    
    // } catch(err) {
    // console.log(err);
    // }
}
