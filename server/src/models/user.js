/* eslint-disable no-unused-vars */
'use strict';
// const Promise = require('bluebird')
const bcrypt = require('bcrypt')

const {
  Model
} = require('sequelize');

function hashPassword(user, options) {
  const SALT_FACTOR = 10

  if (!user.changed('password')) {
    return;
  }
  // return bcrypt
  //   .genSalt(SALT_FACTOR)
  //   .then(salt=> bcrypt.hash(user.password, salt, null))
  //   .then(hash=> {
  //     user.setDataValue('password', hash)
  //   })
  // return bcrypt.genSalt(SALT_FACTOR, salt=>{
  //   bcrypt.hash(user.password, salt, hash=> {
  //     user.setDataValue(user.password, hash)
  //   })
  // })
  return bcrypt.hash(user.password, SALT_FACTOR).then(hash=> {
    user.setDataValue('password', hash)
  })
}

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  });
  User.associate = function(models) {
    User.hasOne(models.Bookmark)
  }
  User.prototype.comparePassword = function (password) {
    return bcrypt.compare(password, this.password).then(result =>{
      result == true
    })
  }

  return User;
};