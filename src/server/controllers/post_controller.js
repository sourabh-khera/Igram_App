const postServices = require('../services/post_service');
const jwtToken = require('jsonwebtoken');
const isEmpty = require('lodash/isEmpty');
const cloudinaryService = require('../services/cloudinary.service');

exports.createPost = (req, res) => {
  console.log(req.body)
  const { uri, height, width } = req.body;
  const userId = req.userId;
  console.log(uri, "post---", userId, "id----");
  cloudinaryService.saveImageToCloudinary(uri, height, width)
    .then(result => {
      postServices.addPost({ userId, imageUrl: result.url })
        .then(data => console.log(data))
        .catch(err => res.status(400).send(err))
    })
    .catch(err => res.status(400).send(err));
}
