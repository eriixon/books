angular.module('books').component('bookStore', {
    templateUrl: 'comps/books.html',
    controllerAs: 'bs',
    controller: function($scope, $firebaseArray){
        var bs = this;
        bs.books = [];
        
        var library = new Firebase('https://library0510.firebaseio.com/');
        bs.books = $firebaseArray(library);
        
        bs.addBook = function (book){
            bs.books.$add(book);
            $scope.book = {};
        }
        bs.removeBook = function(book){
            bs.books.$remove(book);
        }
        bs.editBook = function (book){
            
        }
    }
})