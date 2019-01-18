const request = require('request');

const pdfsUrl = process.env.PDFS_URL || 'pdfs:4100';
console.log(`PDF service pointing to http://${pdfsUrl}/`);

function getPdf(template, data) {
  return request({
    url: `http://${pdfsUrl}/${template}`,
    method: 'POST',
    json: data
  });
}

module.exports.getPdf = getPdf;