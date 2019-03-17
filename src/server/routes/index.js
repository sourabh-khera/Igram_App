const jwtToken = require('jsonwebtoken');
const userRoutes = require ('./user_routes');
const postRoutes = require('./posts_routes');

const verifyToken = (req, res, next) => {
   const token = req.headers.authorization;
   if(token){
       jwtToken.verify(token, 'Nothing Is Impossible', (err, info) => {
          if(err){
            res.status(500).send("invalid token");
          }else {
            const data=jwtToken.decode(token);
            req.userId=data.userId;
            next();
          }
       })
   } else {
      res.send('please send the token');
   }
}
module.exports = app => {
   userRoutes(app);
   postRoutes(app, verifyToken);
}