const ngModule = angular.module('App', []);
require('./services')(ngModule);
require('./controllers')(ngModule);
require('./directives')(ngModule);
require('./directives/selectUi')(ngModule);
