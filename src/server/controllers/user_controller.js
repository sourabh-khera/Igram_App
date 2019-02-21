const userServices = require('../services/user_service');
const jwtToken = require('jsonwebtoken');
const bcrpyt = require('bcrypt');
const isEmpty = require('lodash/isEmpty');

exports.createUser = (req, res) => {
   const userDetails = req.body;
   const { userName, password } = userDetails;
   const saltRounds = 10;
   bcrpyt.hash(password, saltRounds).then(hash => {
      userServices.addUser({userName, password: hash})
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
   }).catch(err => res.status(400).send('erroe in password encryption'));
   
}

exports.authenticateUser = (req, res) => {
  const userDetails = JSON.parse(req.query.userInfo);
  userServices.validateUser(userDetails)
    .then(user => {
      if(!isEmpty(user)){
        bcrpyt.compare(userDetails.password, user.Password).then(auth => {
          if(auth){
            const userClaim = {
              userName: userDetails.userName,
            };
            const token = jwtToken.sign(userClaim, 'Nothing Is Impossible', {expiresIn: '365d'});
            res.status(200).send({authenticated: auth, token});
          } else {
            res.status(200).send({authenticated: false});
          }
       })
       .catch(err => res.status(400).send('error in password decryption'));
      } else {
        res.status(400).send({authenticated: false});
      }
      
  }).catch(err => res.status(400).send({authenticated: false}));
      
}