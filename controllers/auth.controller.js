const db = require("../models");
const response = require('./response');
const config = require("../config/auth.config");
const User = db.user;

// const Op = db.Sequelize.Op;
const { Op } = require("sequelize");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    // Save User to Database
    User.create({
        email: req.body.email,
        name: req.body.name,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8)
    })
    .then(user => {
        
        var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400 // 24 hours
        });

        data = {
            'token': token,
            'expires_in': 86400,
            'user': user 
        };

        response.created("User was registered successfully!", data, res);
    })
    .catch(err => {
        response.error(err.message, res);
    });
};