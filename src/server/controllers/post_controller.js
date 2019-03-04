const postServices = require('../services/post_service');
const jwtToken = require('jsonwebtoken');
const isEmpty = require('lodash/isEmpty');

exports.createPost = (req, res) => {
   const postDetails = req.body;
   const userId = req.userId;
   console.log(postDetails, "post---", userId, "id----");
  //  postServices.addPost({userName, password: hash})
  //  .then(data => {
  //      console.log(data, "data-------post");  
  //   }).catch(err => res.status(404).send('error in password encryption'));
   
}
