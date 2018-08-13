
const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    hourlyRate: DataTypes.DECIMAL,
    ClientId: DataTypes.INTEGER,
    contactEmail: DataTypes.STRING,
    address: DataTypes.STRING,
    description: DataTypes.STRING,
    paymentMonthDay: DataTypes.INTEGER
  }, {});
  
  Project.associate = function(models) {
    models.Project.belongsToMany(models.User, {through: 'UserProject'});
  };
  
  Project.prototype.getPeriods = function () {
    
    const dateStart = moment(this.startDate);
    const dateEnd = moment(this.endDate);
    const periods = [];

    while (dateEnd > dateStart || dateStart.format('M') === dateEnd.format('M')) {
       periods.push(dateStart.format('YYYY-MM'));
       dateStart.add(1,'month');
    }
    return periods;
  }
  
  return Project;
};