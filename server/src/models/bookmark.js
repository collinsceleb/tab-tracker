/* eslint-disable no-unused-vars */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bookmark.init({
    
  }, {
    sequelize,
    modelName: 'Bookmark',
  });
  Bookmark.associate = function(models) {
    Bookmark.belongsTo(models.User, {
      foreignKey: 'UserId',
    })
  },
  Bookmark.associate = function(models) {
    Bookmark.belongsTo(models.Song, {
      foreignKey: 'SongId'
    })
  }
  return Bookmark;
};