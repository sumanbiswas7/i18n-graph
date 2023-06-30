const express = require("express");
const cors = require("cors");
const path = require("path");
const { I18n } = require("i18n");
const translations = require("./models/translations");
const { generate_random_data } = require("./helpers/generate_data");

const app = express();
const PORT = 5000;

const i18n = new I18n({
  locales: ["en", "es", "hin", "fr", "ben"],
  directory: path.join(__dirname, "locales"),
  defaultLocale: "en",
});

app.use(cors());
app.use(i18n.init);

app.get("/", (req, res) => {
  try {
    res.status(200).send({ status: "OK", message: res.__("hello") });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
});

app.get("/lang-data", (req, res) => {
  try {
    res.status(200).send(translations(res));
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
});

app.get("/graph-data", (req, res) => {
  const { unit } = req.query;
  const data = generate_random_data(unit, res);
  res.status(200).json(data);
});

app.listen(PORT, () => console.log(`🚀 Server is running on port - ${PORT}`));
