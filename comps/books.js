angular.module('books').component('bookStore', {
    templateUrl: 'comps/books.html',
    controller: function($scope, $firebaseArray){
        var bs = this;
        bs.books = [];
        
        var library = new Firebase('https://library0510.firebaseio.com/');
        bs.books = $firebaseArray(library);
        
        bs.addBook = function (book){
          if(book.$id){ bs.books.$save(book);
            }else
                {bs.books.$add(book)
                }
            bs.newBook = null;
        }
        
        bs.removeBook = function(book){
            bs.books.$remove(book);
        }
        
        bs.editBook = function (book){
            bs.newBook = book;
        }
    }
})