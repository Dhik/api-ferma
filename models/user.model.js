module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        username: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        profile_picture: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        }
    });
    
    User.prototype.toJSON =  function () {
        var values = Object.assign({}, this.get());
        
        delete values.password;
        return values;
    }

    return User;
};