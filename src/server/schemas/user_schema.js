const Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema({
   Username: {
       type: String,
       required: true,
   },
   Password: {
       type: String,
       required: true,
   } 
}, {versionKey: false});

module.exports = Mongoose.model('Users', userSchema);