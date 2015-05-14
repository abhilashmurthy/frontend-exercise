'use strict';

/* Controllers */

angular.module('repoSearchApp.controllers', ['repoSearchApp.config'])
	.controller('RepoSearchCtrl', ['$scope', 'GITHUB', 'Repo', function ($scope, GITHUB, Repo) {
		$scope.categories = GITHUB.in_categories;

		$scope.categorySelect = function(selected, i) {
			$scope.categories[i].selected = !selected;
		}

		$scope.searchGithub = function() {
			if (!$scope.searchKeyword) {
				Materialize.toast('Please enter a keyword!', 3000)
				return;
			}

			$scope.searchingNow = true;

			var searchIn = ' in:';
			searchIn += $scope.categories.map(function (category) {
				return category.selected ? category.name + ',' : '';
			});
			searchIn = searchIn.substring(0, searchIn.length - 1);

			var response = Repo.query({'q': $scope.searchKeyword + searchIn}, function (response) {
				$scope.results = response[GITHUB.response_array];
				$('#resultsList').collapsible({
					accordion: true
				});
				Materialize.showStaggeredList('#resultsList');
			});

			$scope.searchingNow = false;
		}

	}]);