// Initializes the `companys` service on path `/companys`
const { Companys } = require('./companys.class');
const createModel = require('../../models/companys.model');
const hooks = require('./companys.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/companys', new Companys(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('companys');

  service.hooks(hooks);
};
