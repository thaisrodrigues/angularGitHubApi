'use strict';

/**
 * @ngdoc service
 * @name testeVmlvagaApp.data
 * @description
 * # data
 * Factory in the testeVmlvagaApp.
 */
angular.module('testeVmlvagaApp')
  .factory('Data',['$http', function ($http) {

    var obj = {};
    obj.get = function (nomeEmpresa,pagina) {
          return $http.get("https://api.github.com/search/repositories?page="+pagina+"&q=user%3Aglobocom+&&sort=stars&order=desc").then(function (results) {
          //console.log(results.data);
          return results.data;
      });
    };

    obj.getCommits = function (nomeProjeto,pagina) {
          return $http.get("https://api.github.com/repos/globocom/"+nomeProjeto+"/commits?page="+pagina+"&per_page=20").then(function (results) {
          return results;

      });
    };
    return obj;

  }]);
