const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', // 使用机器上的chrome浏览器，可以在chrome地址栏中输入chrome://version获取可执行文件路径
  });
  const page = await browser.newPage();
  await page.goto('https://www.baidu.com');
  await page.screenshot({path: 'baidu.png'});
 
  await browser.close();
})();