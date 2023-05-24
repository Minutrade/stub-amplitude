const express = require("express");
const bodyParser = require('body-parser')
const routes = require('./routes');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const router = new express.Router();
routes(router);
app.use('/', router);

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
