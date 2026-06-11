import { chromium } from "playwright";
import { mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "assets", "projects");

const captures = [
  { file: "newton-desktop.png", url: "https://newton.com.py", width: 1280, height: 800 },
  { file: "newton-mobile.png", url: "https://newton.com.py", width: 390, height: 844, mobile: true },
  { file: "tucursillo-desktop.png", url: "https://tucursillo.com", width: 1280, height: 800 },
  { file: "tucursillo-mobile.png", url: "https://tucursillo.com", width: 390, height: 844, mobile: true },
  { file: "arquimedis-desktop.png", url: "https://arquimedis.com.py", width: 1280, height: 800 },
  { file: "coral-desktop.png", url: "https://asocoralsanjavier.org.py", width: 1280, height: 800 },
  { file: "openmarket-desktop.png", url: "https://openmarket-fiuni.vercel.app/", width: 1280, height: 800 },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();

for (const shot of captures) {
  const page = await browser.newPage({
    viewport: { width: shot.width, height: shot.height },
    deviceScaleFactor: shot.mobile ? 2 : 1,
    isMobile: Boolean(shot.mobile),
    hasTouch: Boolean(shot.mobile),
  });

  try {
    await page.goto(shot.url, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(shot.mobile ? 2000 : 3000);
    await page.screenshot({
      path: path.join(outDir, shot.file),
      fullPage: false,
    });
    console.log(`OK ${shot.file}`);
  } catch (error) {
    console.error(`FAIL ${shot.file}:`, error.message);
  } finally {
    await page.close();
  }
}

await browser.close();
