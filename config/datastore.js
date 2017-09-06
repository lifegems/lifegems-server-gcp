const Datastore = require('@google-cloud/datastore');

const projectId = 'chrome-plateau-178520';
// Must set ENVVAR "$GOOGLE_APPLICATION_CREDENTIALS"
// export GOOGLE_APPLICATION_CREDENTIALS='/path/to/key'
const datastore = Datastore({
  projectId: projectId
});

module.exports = datastore;