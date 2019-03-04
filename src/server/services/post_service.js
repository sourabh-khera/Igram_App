const postSchema = require('../schemas/post_schema');

exports.addPost = postDetails => {
  return new Promise((resolve, reject) => {
    postSchema.create({ ImageUrl: postDetails.imageUrl, PostedBy: postDetails.userId }, (err, post) => {
        if (err) {
            reject(err);
        } else {
            resolve(post);
        };
    });    
  });
}
