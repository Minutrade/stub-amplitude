const { createReadStream } = require("fs");
const { statusCode } = require("../utils");
const { generateFile } = require("../service");

let count = 0;

module.exports = (req, res) => {
  count += 1;
  let data;

  let status = statusCode(count);
  
  console.log("Rota ", req.originalUrl, " (getCohortFileByRequestId) - STATUS CODE", status);

  if (status === 200) {
    data = generateFile(500);
    res.set({
      "Content-Disposition": "attachment; filename=cohort.txt"
    });
    return res.send(data);
  }

  
  return res.status(status).end();
};
