'use strict';

var config = angular.module('repoSearchApp.config', [])
	.constant('GITHUB', {
	  'name': 'Github Search Repositories v3',
	  'endpoint': 'https://api.github.com/search/repositories?q=:q',
	  'in_categories': [
		  	{'name':'name', 'selected': true}, 
		  	{'name':'description', 'selected': true}, 
		  	{'name':'readme', 'selected': true}
  		],
	  'response_array': 'repositories'
	});

var repoSearchAppControllers = angular.module('repoSearchApp.controllers', ['repoSearchApp.config']);
repoSearchAppControllers.controller('RepoSearchCtrl', ['$scope', 'GITHUB', function ($scope, GITHUB) {
		$scope.categories = GITHUB.in_categories;
		$scope.category_select = function(selected, i) {
			$scope.categories[i].selected = !selected;
		}
	}]);
