const userServices = require('../services/user_service');
const jwtToken = require('jsonwebtoken');

exports.createUser = (req, res) => {
   const userDetails = req.body;
   userServices.addUser(userDetails)
     .then(data => {
        const { userCreated } = data;
        if(userCreated){
          const userClaim = {
            userName: userDetails.userName,
          };
          const token = jwtToken.sign(userClaim, 'Nothing Is Impossible', {expiresIn: '365d'});
          res.status(200).send({userCreated, token});
        } else {
          res.status(200).send({userCreated});
        }
     })
     .catch(err => res.status(400).send({userCreated: false}));
}