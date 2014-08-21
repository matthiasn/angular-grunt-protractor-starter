exports.config = {
  seleniumAddress: 'http://localhost:4723/wd/hub',
  specs: ['../test/protractor/spec.js'], 
  chromeOnly: false,
  capabilities: {
      browserName: 'safari'
    , platformName: 'iOS'
    , deviceName: 'iPhone Simulator'
  },
  baseUrl: 'http://localhost:' + (process.env.HTTP_PORT || '8000')
};