const express = require('express');
const bodyParser = require('body-parser');
require('./configurations/data_source');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
routes(app);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("server started----", PORT);
});