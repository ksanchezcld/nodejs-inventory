global.testDate = new Date()
  .toISOString()
  .replace(/T/, '')
  .replace(/-/g, '')
  .replace(/:/g, '')
  .replace(/\..+/, '')
  .replace()

require('./items-test')
require('./transactions-test')
require('./inventory-test')
