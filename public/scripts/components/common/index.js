let commonModule = angular.module('app.common', []);

import communicationFact from './common.communication';
commonModule.factory('communication', communicationFact.communicationFunctions);

import dataFactory from './data.factory';
commonModule.factory('dataFactory', dataFactory.dataFactoryFunctions);

export default commonModule;
