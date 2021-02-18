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
      let compare = bcrypt.compareSync(password, user.password)
      console.log('bcrypt.compareSync(password, user.password)', compare)
      if (compare) {
        return user.authorize();
      }
      throw new Error('invalid password');
    }
    User.prototype.authorize = async function () {
      const { AuthToken } = sequelize.models;
      const user = this
      const authToken = await AuthToken.generate(this.id);
      await user.set(authToken);
      return { user, authToken }
    };
    User.prototype.logout = async function (token) {
      sequelize.models.AuthToken.destroy({ where: { token } });
    };
    
    return User;
};