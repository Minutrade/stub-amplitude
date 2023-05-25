const {
  getCohortFileById,
  requestStatusByRequestId,
  getCohortFileByRequestId,
  getCohorts,
} = require("./controller");

const { postData } = require("./controller/postSlack");

const massahmg100k = './cohorts/massa-hmg-100k.csv?v=1682700545006';
const james = './cohorts/cohort-james.csv';
const james_cae = './cohorts/cohort-james-cae.csv?v=1680029148265';
const workshop = './cohorts/workshop-xj.csv?v=1684257743908';

let cont = 0;

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.status(200).send({ test: true });
  });
  app.get("/profiles", (req, res) => {
    console.log("Rota ", req.originalUrl, " (get profiles)");

    res.status(200).send({
      _id: "6026c10549d8567484400090",
      portal: "minuclub",
      keys: ["portal", "email"],
      consumerId: "ef20ee3a99e24ec5a22ce738ec827567",
      experience: "abc",
      cpf: "02389103006",
      email: "natane@sandbox.pagseguro.com.br",
      optin: true,
      status: {
        name: "active",
        timestamp: "2021-02-12T11:26:24.557+0000",
      },
      contactInfo: [
        {
          type: "default",
          name: "natane balt",
          mobile: "5551993548552",
          email: "natane@sandbox.pagseguro.com.br",
        },
      ],
      acceptedTerm: {
        timestamp: "2021-02-12T11:26:24.557+0000",
      },
      lastUpdated: "2021-02-12T17:58:38.064+0000",
      created: "2021-02-12T17:55:17.714+0000",
    });
  });
  app.get("/5/cohorts/request/:cohortId", getCohortFileById);
  app.get("/5/cohorts/request-status/:requestId", requestStatusByRequestId);
  app.get("/5/cohorts/request/:requestId/file", (req, res) => {
    /* if(cont === 0){
      cont =1;
      res.set('location', urlFile);
      res.sendStatus(302);
    }else{
      cont = 0;
      res.set('location', urlFileTwo);
      res.sendStatus(302);
    }*/
    // res.set("location", james);
    // res.sendStatus(302);

    res.sendFile(james, { root: __dirname }, (err) => {
      if (err) {
        console.error(err);
        res.sendStatus(500);
      }
      res.set("location", james);
      res.sendStatus(302);
    });
  });
  app.get("/file/:requestId/download", getCohortFileByRequestId);
  app.get("/3/cohorts", getCohorts);

  app.post("/v1/messaging/messages", (req, res) => {
    const { body } = req;
    console.log("[STUB] SMS ENVIADO - SYNIVERSE", body.body);
    res.sendStatus(201);
  });

  app.post("/post", (req, res) => {
    const { body } = req;
    console.log("[STUB] post", body);
    res.sendStatus(201);
  });

  app.post("/ip", (req, res) => {
    console.log("IP");
    console.log("req.ip", req.ip);
    console.log(
      "req.headers['x-forwarded-for']",
      req.headers["x-forwarded-for"]
    );
    console.log("req.req.socket.remoteAddress", req.socket.remoteAddress);
    res.sendStatus(200, req.ip);
  });

  app.post("/webhook", async (req, res) => {
    console.log("rota webhook!");
    console.log("Body: ", req.body);

    const result = await postData(req.body);

    res.sendStatus(result);
  });
};
