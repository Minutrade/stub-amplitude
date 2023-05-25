require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser')
const routes = require('./routes');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const router = new express.Router();
routes(router);
app.use('/', router);
const port = process.env.PORT || 3000;

const listener = app.listen(port, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
