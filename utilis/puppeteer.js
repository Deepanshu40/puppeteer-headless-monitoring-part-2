const puppeteer = require('puppeteer'); 
const executablePath = path.join(__dirname, '..', '.cache', 'puppeteer', 'chrome', 'linux-124.0.6367.91', 'chrome-linux64', 'chrome');

module.exports.puppeteerSession = async () => {
    try {
        const browserInstance = await puppeteer.launch({
            headless:true,
            executablePath,
        });
        const page = await browserInstance.newPage();
        await page.goto('https://en.wikipedia.org/wiki/Ram_Charan', { waitUntil: 'networkidle0' });
        const items = await page.evaluate(() => {
            const paragraphs = Array.from(document.querySelectorAll('p')); // Convert NodeList to Array
            return paragraphs.map(p => p.innerText); // Map over the array to return innerText of each paragraph
        });
        console.log(items.length);
        
    
    } catch(err) {
    console.log(err);
    }
}
