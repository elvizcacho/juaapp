const request = require('request');

function getPdf(template, data) {
  return request({
    url: `http://pdfs:4100/${template}`,
    method: 'POST',
    json: data
  });
}

module.exports.getPdf = getPdf;