const postServices = require('../services/post_service');
const jwtToken = require('jsonwebtoken');
const isEmpty = require('lodash/isEmpty');
const cloudinaryService = require('../services/cloudinary.service');

exports.createPost = (req, res) => {
   const postUrl = req.body.uri;
   const userId = req.userId;
   console.log(postUrl, "post---", userId, "id----");
   cloudinaryService.saveImageToCloudinary(postUrl)
  //  postServices.addPost({userName, password: hash})
  //  .then(data => {
  //      console.log(data, "data-------post");  
  //   }).catch(err => res.status(404).send('error in password encryption'));
   
}
