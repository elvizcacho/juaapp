const User = require('../../db/models').User;
const Client = require('../../db/models').Client;
const Project = require('../../db/models').Project;
const Timesheet = require('../../db/models').Timesheet;
const TimesheetEntry = require('../../db/models').TimesheetEntry;
const PdfService = require('../../services').PdfService;
const moment = require('moment');
const VAT = 0.19; // TODO: SET BY PROJECT

function exportInvoiceAsPDFByTimesheetId(req, res) {
  
  const data = {};
  
  User
    .findById(req.user.id)
    .then(user => {
      data.user = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        address: {
          street: user.street,
          houseNumber: user.houseNumber,
          postalCode: user.postalCode,
          city: user.city
        },
        taxNumber: user.taxNumber,
        vatNumber: user.vatNumber,
        bank: {
          iban: user.iban,
          name: user.bankName,
          address: user.bankAddress,
          swiftCode: user.bankSwiftCode
        }
      };
      return Timesheet.findById(req.body.timesheetId);
    })
    .then(timesheet => {
      data.invoiceNumber = '01' + moment(timesheet.from).format('MMYYYY'); //TODO: replace 01 with real data
      data.date = moment().format('DD.MM.YYYY')
      data.toBePaidOn = moment(timesheet.from).add(1, 'month').add(22, 'days').format('DD.MM.YYYY');
      return Promise.all([
        timesheet.getTimesheetEntries({
            raw: true
        }),
        Project.findById(timesheet.ProjectId)
      ]);
    })
    .then(results => {
      
      const timesheetEntries = results[0];
      const totalWorkedHoursOnSite = timesheetEntries.reduce((acum, entry) => {
        acum += (entry.remote) ? 0: entry.hours;
        return acum;
      }, 0);
      const totalWorkedHoursRemote = timesheetEntries.reduce((acum, entry) => {
        acum += (entry.remote) ? entry.hours : 0;
        return acum;
      }, 0);
      const project = results[1];
      data.project = {
        description: project.description,
        hourlyRateOnSite: project.hourlyRateOnSite,
        hourlyRateRemote: project.hourlyRateRemote
      };
      const net = project.hourlyRateOnSite * totalWorkedHoursOnSite + project.hourlyRateRemote * totalWorkedHoursRemote;
      const vatPayment = Number((VAT * net).toFixed(2))
      data.result = {
        hoursOnSite: totalWorkedHoursOnSite,
        hoursRemote: totalWorkedHoursRemote,
        bruto: net + vatPayment,
        vat: VAT * 100,
        vatPayment: vatPayment,
        net: net
      };
      return Client.findById(project.ClientId);
    })
    .then(client => {
      data.client = {
        name: client.name,
        address: {
          street: client.street,
          houseNumber: client.houseNumber,
          postalCode: client.postalCode,
          city: client.city
        }
      };
      return data;
    })
    .then(data => PdfService.getPdf('invoice.handlebars', data).pipe(res));
  
  
}

module.exports.exportInvoiceAsPDFByTimesheetId = exportInvoiceAsPDFByTimesheetId;