// not working yet

exports.config = {
  seleniumAddress: 'http://localhost:4723/wd/hub',
  specs: ['../test/protractor/spec.js'], 
  chromeOnly: false,
  capabilities: {
      browserName: 'chrome'
    , platformName: 'android'
    , deviceName: 'emulator-5554'
  },
  baseUrl: 'http://localhost:' + (process.env.HTTP_PORT || '8000')
};