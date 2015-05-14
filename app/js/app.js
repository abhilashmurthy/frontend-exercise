'use strict';

/* App Module */

angular.module('repoSearchApp', [
  'repoSearchApp.directives',
  'repoSearchApp.controllers',
  'repoSearchApp.services'
]);

angular.module('repoSearchApp.config', [])
  .constant('GITHUB', {
    'name': 'Github Search Repositories v3',
    'endpoint': 'https://api.github.com/search/repositories',
    'in_categories': [
        {'name':'name', 'selected': true}, 
        {'name':'description', 'selected': true}, 
        {'name':'readme', 'selected': true}
      ],
    'response_array': 'items'
  });