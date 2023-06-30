const faker = require("faker");

function generate_random_data(unit, res) {
  const data = [];

  const smallUnit =
    unit === "second"
      ? res.__("graph.units.sec")
      : unit === "hour"
      ? res.__("graph.units.hour")
      : res.__("graph.units.min");

  const countVal = unit === "second" ? 110 : unit === "hour" ? 13 : 110;
  const incrVal = unit === "second" ? 10 : unit === "hour" ? 1 : 10;

  for (let i = 0; i < countVal; i += incrVal) {
    const random_temp = faker.datatype.number({ min: 60, max: 100 });
    const random_humid = faker.datatype.number({ min: 10, max: 50 });

    const temp = {
      name: `${i} ${smallUnit}`,
      humid: random_humid,
      temp: random_temp,
    };
    data.push(temp);
  }

  return data;
}

module.exports = { generate_random_data };
