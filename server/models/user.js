const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {});

    User.associate = function(models) {
      User.hasMany(models.AuthToken);
    };

    User.associate = function(models) {
      User.hasMany(models.Box);
    };

    // This is a class method, it is not called on an individual
    // user object, but rather the class as a whole.
    User.authenticate = async function(username, password) {


      const user = await User.findOne(
            {
                where: {
                    username: username
                }, include: [{
                    all: true,
                    nested: true
                  }]
                });

      // bcrypt is a one-way hashing algorithm that allows us to 
      // store strings on the database rather than the raw
      // passwords
      if (bcrypt.compare(password, user.password)) {
        return user.authorize();
      }

      throw new Error('invalid password');
    }

    // in order to define an instance method, we have to access
    // the User model prototype.
    User.prototype.authorize = async function () {
      const { AuthToken } = sequelize.models;
      const user = this

      // create a new auth token associated to 'this' user
      // by calling the AuthToken class method we created earlier
      // and passing it the user id
      const authToken = await AuthToken.generate(this.id);

      // console.log('authToken', authToken)

      // addAuthToken is a generated method provided by
      // sequelize which is made for any 'hasMany' relationships
      await user.set(authToken);
      // console.log( user, authToken )
      return { user, authToken }
    };


    User.prototype.logout = async function (token) {

      // destroy the auth token record that matches the passed token
      sequelize.models.AuthToken.destroy({ where: { token } });
    };



    return User;
};