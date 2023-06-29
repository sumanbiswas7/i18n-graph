const express = require("express");
const cors = require("cors");
const path = require("path");
const { I18n } = require("i18n");

const app = express();
const PORT = 5000;

const i18n = new I18n({
  locales: ["en", "es", "hin", "fr", "ben"],
  directory: path.join(__dirname, "locales"),
  defaultLocale: "en",
});

app.use(i18n.init);

app.get("/", (req, res) => {
  try {
    res.status(200).send({ hello: res.__("hello") });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => console.log(`🚀 Server is running on port - ${PORT}`));
