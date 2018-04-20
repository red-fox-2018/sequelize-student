'use strict';
module.exports = (sequelize, DataTypes) => {
  var addHeight = sequelize.define('addHeight', {
    height: {type: DataTypes.STRING,
    validate:{
      min:150
    }}
  }, {});
  addHeight.associate = function(models) {
    // associations can be defined here
  };
  return addHeight;
};