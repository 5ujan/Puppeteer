const { join } = require("path");
const {executablePath} = require("puppeteer")

module.exports = {
  launch: {
    // Path to the Chromium executable on your system
    executablePath: executablePath(), // Replace with the actual path
    headless: true, // Set to false for headful mode
    args: ["--no-sandbox", "--disable-http2"], // Add additional Chromium flags if needed
  },
  // Other Puppeteer configurations go here
};
