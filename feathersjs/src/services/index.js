const users = require('./users/users.service.js')
const companys = require('./companys/companys.service.js');
const documents = require('./documents/documents.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users)
  app.configure(companys);
  app.configure(documents);
}
