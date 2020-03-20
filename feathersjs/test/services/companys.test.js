const assert = require('assert');
const app = require('../../src/app');

describe('\'companys\' service', () => {
  it('registered the service', () => {
    const service = app.service('companys');

    assert.ok(service, 'Registered the service');
  });
});
