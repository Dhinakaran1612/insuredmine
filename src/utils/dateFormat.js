const moment = require("moment");

const dateFormat = (date, type) =>
  typeof date == "number"
    ? type == "endDate"
      ? moment(date).add(1, "years").format("YYYY-MM-DD")
      : moment(date).format("YYYY-MM-DD")
    : moment(date, "DD-MM-YYYY").format("YYYY-MM-DD");

module.exports = {
  dateFormat,
};
