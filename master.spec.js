var webdriver = require('selenium-webdriver'),
	client = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

jasmine.getEnv().defaultTimeoutInterval = 10000;
jasmine.getEnv().addReporter(new jasmine.ConsoleReporter(console.log));

global.webdriver = webdriver;
global.client = client;

describe('Bulk tests...', function(){
	require('./definitions.spec.js');
});