'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserProject = sequelize.define('UserProject', {
    UserId: DataTypes.INTEGER,
    ProjectId: DataTypes.INTEGER
  }, {});
  UserProject.associate = function(models) {
    // associations can be defined here
  };
  return UserProject;
};