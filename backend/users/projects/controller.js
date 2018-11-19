const User = require('../../db/models').User;
const Project = require('../../db/models').Project;

function getUserProjects(req, res) {
  const user = new User(req.user);
  user.getProjects()
  .then(projects => {
    projects = projects.map(project => {
      delete project.dataValues.UserProject;
      return project;
    })
    res.send(projects)
  });
}

function getUserProjectById(req, res) {
  
  const user = new User(req.user);
  
  user.getProjects({ where: { id: req.params.projectId }})
  .then(projects => {
    const project = projects[0];
    delete project.dataValues.UserProject;
    return project.addPeriods();
  })
  .then(projectWithPeriods => res.send(projectWithPeriods));
}

function createProject(req, res) {
    const user = new User(req.user);
    Project
        .create({
            name: req.body.name,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            hourlyRate: req.body.hourlyRate,
            ClientId: req.body.ClientId,
            contactEmail: req.body.contactEmail,
            street: req.body.street,
            houseNumber: req.body.houseNumber,
            postalCode: req.body.postalCode,
            city: req.body.city,
            description: req.body.description,
            paymentMonthDay: req.body.paymentMonthDay
        })
        .then(project => project.setUsers([user]))
        .then(project => res.send(project));

}

function deleteProject(req, res) {
    Project.destroy({
        where: {
            id: req.params.projectId
        }
    }).then(() => res.send({ok: 'ok'}));
}

module.exports.getUserProjects = getUserProjects;
module.exports.getUserProjectById = getUserProjectById;
module.exports.createProject = createProject;
module.exports.deleteProject = deleteProject;