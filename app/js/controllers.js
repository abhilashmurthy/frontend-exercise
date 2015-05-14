'use strict';

/* Controllers */

angular.module('repoSearchApp.controllers', ['repoSearchApp.config'])
	.controller('RepoSearchCtrl', ['$scope', 'GITHUB', 'RepoManager', function ($scope, GITHUB, RepoManager) {
		$scope.categories = GITHUB.in_categories;
		$scope.changeCategory = function(isSelected, i) {
			$scope.categories[i].selected = !isSelected;
			if (!_.where($scope.categories, {selected: true}).length) {
				Materialize.toast('Searching for "name" anyway!', 3000)
			}
			$scope.searchGithub();
		}

		$scope.changeSearch = function() {
			$scope.hasResults = null;
			return true;
		}
		$scope.changeSearch();

		$scope.rate_limit = 60;
		$scope.searchGithub = function() {
			if (!$scope.searchKeyword) {
				Materialize.toast('Please enter a keyword!', 3000)
				return;
			}

			var searchIn = ' in:';
			searchIn += _.pluck(_.where($scope.categories, {selected: true}), 'name').join();

			RepoManager.searchRepos($scope.searchKeyword + searchIn)
				.then(function (response) {
					console.log(response);
					$scope.results = response.repos;
					$scope.hasResults = response.repos && response.repos.length;
					$scope.rate_limit = parseInt(response.rate_limit_remaining);
					if (!$scope.hasResults) {
						Materialize.toast('No results found...', 3000);
						return false;
					}
					if ($scope.rate_limit < 5) {
						Materialize.toast('You can only search ' + ($scope.rate_limit + 1) + ' more times', 3000);
					}
					Materialize.showStaggeredList('#resultsList');
				});
		}

	}]);