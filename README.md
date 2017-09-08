# convert-iso8601-duration
Convert YouTube like duration strings to seconds

## Install
```
npm i -S convert-iso8601-duration
```

## Example
```
const isoConvert = require('convert-iso8601-duration');
const seconds = isoConvert('PT1M37S')
console.log('seconds', seconds); // 97
console.log('ms', (seconds * 1000)); // 97000
```
