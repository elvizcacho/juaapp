const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })


nightmare
  .goto('file:///Users/warlock/juaapp/backend/pdfs/templates/test.html')
  .wait('.signature')
  .pdf('./pdfs/temp/test.pdf')
  .end(result => {
    console.log('ok', result);
  })
  .catch(error => {
    console.error('Search failed:', error)
  })