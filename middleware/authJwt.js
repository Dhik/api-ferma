const jwt = require("jsonwebtoken");
const response = require('../controllers/response');
const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
  
    if (!token) {
        response.forbidden("No token provided!", res);
    }
  
    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            response.unauthorized("Unauthorized!", res);
        }
        req.userId = decoded.id;
        next();
    });
};

const authJwt = {
    verifyToken: verifyToken
};

module.exports = authJwt;