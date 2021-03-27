const response = require('../controllers/response');
const db = require("../models");
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username
    User.findOne({
        where: {
            username: req.body.username
        }
    }).then(user => {
        if (user) {
            response.bad("Failed! Username is already in use!", res);
            return;
        }
  
        // Email
        User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                response.bad("Failed! Email is already in use!", res);
                return;
            }
  
            next();
        });
    });
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail
};

module.exports = verifySignUp;