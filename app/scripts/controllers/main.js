'use strict';

/**
 * @ngdoc function
 * @name testeVmlvagaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testeVmlvagaApp
 */
angular.module('testeVmlvagaApp')
  .controller('MainCtrl', function ($scope,$http,$location,Data) {

    function createUnknownError(status) {
      return {
        status: status,
        statusText: 'Internal Server Error',
        description: 'No details available'
      };
    }
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log(this.awesomeThings);
  });
