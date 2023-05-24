const { statusCode } = require("../utils");
const { genereteCohorts } = require("../service");

let count = 0;

module.exports = (req, res) => {
  count += 1;
  let data;

  const status = statusCode(count);
  
  if (status !== 429) {
    data = genereteCohorts();
  }
  
  console.log("Rota ", req.originalUrl, " (getCohorts) - STATUS CODE", status);
  return res.status(status).send({ cohorts: data });
};