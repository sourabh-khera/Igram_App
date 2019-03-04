const postController = require('../controllers/post_controller');

module.exports = (app, verifyToken) => {
    app.post('/api/v1/createPost', verifyToken, postController.createPost);
}