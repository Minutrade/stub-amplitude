const Chance = require("chance");
const { statusCode } = require("../utils");
const chance = new Chance();
let count = 0;

module.exports = (req, res) => {
  count += 1;
  let data;

  const status = statusCode(count);

  if (status !== 429) {
    data = {
      request_id: chance.hash({ length: 6 }),
      cohort_id: req.params.cohortId
    };
  }
  
  console.log("Rota ", req.originalUrl, " (getCohortFileById) - STATUS CODE", status);

  return res.status(status).send(data);
  //return res.status(503).send({error:'503'});
};
