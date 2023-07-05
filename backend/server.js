const express = require("express");
const cors = require("cors");
const path = require("path");
const { I18n } = require("i18n");
const serverless = require("serverless-http");
const translations = require("./models/translations");
const { generate_random_data } = require("./helpers/generate_data");
const endpoints = require("./routes");

const app = express();

const i18n = new I18n({
  locales: ["en", "es", "hin", "fr", "ben"],
  directory: path.join(__dirname, "locales"),
  defaultLocale: "en",
});

app.use(cors());
app.use(i18n.init);
const handler = serverless(app);

/**
 * ---------------
 *   Endpoints
 * ---------------
 */
endpoints(app, translations, generate_random_data);

module.exports = { app, handler };
