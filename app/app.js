(function(){var appp = angular.module('books', ['ui.router','firebase'])})();

angular.module('books').config(function($stateProvider){
    $stateProvider
    .state('home',{
        url: '',
        template: '<book-store></book-store>'
        })
});