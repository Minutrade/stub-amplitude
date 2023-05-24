const { statusCode } = require("../utils");
let count = 0;

module.exports = (req, res) => {
  count += 1;
  let data;
  const statusData = [
    {
      code: 202,
      async_status: "JOB INPROGRESS"
    },
    {
      code: 200,
      async_status: "JOB COMPLETED"
    }
  ];

  const status = statusCode(count, [200]);

  if (status !== 429) {
    data = {
      request_id: req.params.requestId,
      cohort_id: 'sbiPDQ',
      async_status: statusData.find(i => i.code === status).async_status
    };
  }

  console.log("Rota ", req.originalUrl, " (requestStatusByRequestId) - STATUS CODE", status);
  
  return res.status(status).send(data);
};
