const Mongoose = require('mongoose');

Mongoose.connect("mongodb://localhost/igram");

(()=>{
   Mongoose.connection.on('open', (err, data) => {
     console.log("connection successful");
   });
   Mongoose.connection.on('error', (err, data) => {
    console.log("connection not successful");
  });
})();