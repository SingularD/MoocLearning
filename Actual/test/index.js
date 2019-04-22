const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

  app.listen(4444, function() {
    console.log('App listening at port 8080;');
  });
