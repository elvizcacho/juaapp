
const moment = require('moment');


module.exports = (sequelize, DataTypes) => {

  const Timesheet = sequelize.import('./timesheet');
  
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
    models.Project.hasMany(models.Timesheet);
  };
  
  Project.prototype.addPeriods = function () {
    
    const self = this;
    const dateStart = moment(this.startDate);
    const dateEnd = moment(this.endDate);
    let periods = [];
    const projectId = this.id;

    while (dateEnd > dateStart || dateStart.format('M') === dateEnd.format('M')) {
       periods.push({ date: dateStart.format('YYYY-MM'), status: 'open', id: null });
       dateStart.add(1,'month');
    }
    
    return Timesheet
      .findAll({
        where: {
          ProjectId: projectId
        }
      })
      .then(timesheets => {
        
        const periodsByTimesheet = timesheets.map(timesheet => {
          return { date: moment(timesheet.from).format('YYYY-MM'), status: timesheet.status, id: timesheet.id };
        });
        
        periods = periods.map(period => {
          const periodToCopy = periodsByTimesheet.find(periodByTimesheet => periodByTimesheet.date === period.date);
          if (periodToCopy) {
            period.status = periodToCopy.status;
            period.id = periodToCopy.id;
          }
          return period;
        });
        
        self.dataValues.periods = periods;
        
        return self;
        
      });
    
  }
  
  return Project;
};