
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    password: DataTypes.STRING,
    street: DataTypes.STRING,
    houseNumber: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    city: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    taxNumber: DataTypes.STRING,
    vatNumber: DataTypes.STRING,
    iban: DataTypes.STRING,
    bankName: DataTypes.STRING,
    bankAddress: DataTypes.STRING,
    bankSwiftCode: DataTypes.STRING
  }, {});
  User.associate = (models) => {
    models.User.belongsToMany(models.Project, {through: 'UserProject'});  
  };
  return User;
};