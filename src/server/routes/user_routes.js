const userController = require('../controllers/user_controller');

module.exports = app => {
    app.post('/api/v1/addUser', userController.createUser);
}