const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const models = require('./models');


app.use("/", express.static(path.join(__dirname, './public')));
app.get('/users', function (req, res) {
  models.users.get(function(err, results) {
      if (err) { 
          console.log('error get');
      }
      console.log('controllers');
      console.log(results);
      res.json(results);
      res.status(200).send(results);
  });
});

app.listen(port, ()=> {
  console.log('we at ' + port);
})