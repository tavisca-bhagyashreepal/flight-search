import angular from 'angular';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'angularjs-slider';


import appConfig from './components/config/app.config';
import appRun from './components/config/app.run';
import appConst from './components/config/app.constant';

import './components/home';
import './components/common';
import './components/filters';
import './components/details';

let required = [
  'ui.bootstrap',
  'ui.router',
  'app.home',
  'app.common',
  'app.filters',
  'app.details'
]

window.app = angular.module('app', required);

angular.module('app').constant('AppConstants', appConst);

angular.module('app').config(appConfig);

angular.module('app').run(appRun);
angular.bootstrap(document, ['app'], {
  strictDi: true
});
