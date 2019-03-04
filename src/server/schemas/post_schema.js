const Mongoose = require('mongoose');

const postSchema = new Mongoose.Schema({
   ImageUrl: {
       type: String,
   },
   PostedBy: {
       type: Mongoose.Schema.Types.ObjectId,
       ref: 'Users',
   }, 
}, {versionKey: false, timestamps: true});

module.exports = Mongoose.model('Posts', postSchema);