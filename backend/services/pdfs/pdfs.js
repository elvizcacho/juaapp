const request = require('request');
const fs = require('fs');

function getPdf(template, data) {
  return request({
    url: 'http://pdfs:4100/timesheet.handlebars',
    method: 'POST',
    json: data
  });
}

module.exports.getPdf = getPdf;