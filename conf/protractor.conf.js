exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../test/protractor/spec.js'], 
  multiCapabilities: [{
    'browserName': 'phantomjs'
  }, {
    'browserName': 'firefox'
  }, {
    'browserName': 'chrome'
  }]
}