const userController = require('../controllers/user_controller');

module.exports = (app) => {
    app.post('/api/v1/addUser', userController.createUser);
    app.get('/api/v1/authenticateUser', userController.authenticateUser);
}