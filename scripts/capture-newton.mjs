import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outFile = path.join(__dirname, "..", "assets", "projects", "newton-desktop.png");

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});

try {
  await page.goto("https://newton.com.py", { waitUntil: "domcontentloaded", timeout: 90000 });
  await page.waitForTimeout(4000);

  await page.evaluate(() => window.scrollTo(0, 0));

  const dismissSelectors = [
    "button:has-text('Aceptar')",
    "button:has-text('Accept')",
    "button:has-text('OK')",
    ".cookie-notice button",
    "#cookie_action_close_header",
    "[class*='cookie'] button",
    "[class*='consent'] button",
  ];

  for (const selector of dismissSelectors) {
    try {
      const btn = page.locator(selector).first();
      if (await btn.isVisible({ timeout: 500 })) {
        await btn.click({ timeout: 2000 });
        await page.waitForTimeout(800);
        break;
      }
    } catch {
      /* ignore */
    }
  }

  await page.evaluate(() => {
    document.querySelectorAll("[class*='loader'], [class*='preloader'], .elementor-section-height-full").forEach((el) => {
      if (el instanceof HTMLElement) el.style.display = "none";
    });
  });

  await page.waitForTimeout(2000);
  await page.evaluate(() => window.scrollTo(0, 0));

  await page.screenshot({
    path: outFile,
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  });

  console.log("OK newton-desktop.png");
} catch (error) {
  console.error("FAIL:", error.message);
  process.exitCode = 1;
} finally {
  await browser.close();
}
