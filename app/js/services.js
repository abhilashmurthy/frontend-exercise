'use strict';

/* Services */

angular.module('repoSearchApp.services', ['ngResource', 'repoSearchApp.config'])
	.factory('Repo', ['$resource', 'GITHUB', function($resource, GITHUB){
    return $resource(GITHUB.endpoint, {'q': '@q'}, {
    	query: {
    		method: 'GET',
    		isArray: false
    	}
    });
  }]);