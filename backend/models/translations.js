const translations = (res) => ({
  hello: res.__("hello"),
  language: res.__("language"),
  times: {
    units: {
      hour: res.__("times.units.hour"),
      min: res.__("times.units.min"),
      sec: res.__("times.units.sec"),
    },
  },
  tabs: {
    names: {
      temp: res.__("tabs.names.temp"),
      humid: res.__("tabs.names.humid"),
      combined: res.__("tabs.names.combined"),
    },
  },
  graph: {
    units: {
      hour: res.__("graph.units.hour"),
      min: res.__("graph.units.min"),
      sec: res.__("graph.units.sec"),
    },
    labels: {
      minHumid: res.__("graph.labels.minHumid"),
      maxHumid: res.__("graph.labels.maxHumid"),
      minTemp: res.__("graph.labels.minTemp"),
      maxTemp: res.__("graph.labels.maxTemp"),
    },
  },
});

module.exports = translations;
