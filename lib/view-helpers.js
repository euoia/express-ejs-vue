const fs = require("fs");

exports.mix = path => {
  if (fs.existsSync(".hot")) {
    return `http://localhost:8081/${path}`;
  }

  return path;
};
