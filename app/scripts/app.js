'use strict';

/**
 * @ngdoc overview
 * @name testeVmlvagaApp
 * @description
 * # testeVmlvagaApp
 *
 * Main module of the application.
 */
angular
  .module('testeVmlvagaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:name*', {
        templateUrl: 'views/projetoDetalhes.html',
        controller: 'ProjetoDetalhesCtrl',
        controllerAs: 'projetoDetalhes'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
