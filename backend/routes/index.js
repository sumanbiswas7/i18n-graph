function setupEndpoints(app, translations, generateRandomData) {
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
    const data = generateRandomData(unit, res);
    res.status(200).json(data);
  });
}

module.exports = setupEndpoints;
