const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser());

app.listen(3000, () => {
  console.log("server started----");
});