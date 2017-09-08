const isoConvert = require('../index');
const seconds = isoConvert('PT1M37S')
console.log('seconds', seconds); //97
console.log('ms', (seconds * 1000)); //97000