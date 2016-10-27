angular.module('chatroom').service('messageService', function($http){
  //Here you'll need to create two methods. One called postMessage and the other called getMessages.

  //On the lines below create a getMessages method. This method will retrieve data from the backend.
  this.getMessages = function() {
    return $http({//this is a request to api in angular, this is referred to as http call
      method: 'GET',// rest standard, method GET will retrieve the info from the data base controlled by the api, API will dictate what the server will do.
      url: 'http://practiceapi.devmounta.in/api/chats'  //The url for the get request should be 'http://practiceapi.devmounta.in/api/chats', is the fill path for api to look at
    });
  };  //Be sure to return whatever gets returned from $http so you can call .then in your controller.

  //On the line below create the postMessage method. This method will add data to the backend server.
  this.postMessage = function(inputMessage) {
    return $http({//this is a http call or a request to the api in angular
      method: 'POST',//rest standard method post will add new info to the server database
      url: 'http://practiceapi.devmounta.in/api/chats',//The url for the request needs to be 'http://practiceapi.devmounta.in/api/chats'
      data: {message: inputMessage}//this is the body. it will be transferred into JSON to be stored on the database of the server
    });
  };//Because we're making a POST request, we need a way to tell the server the data we want to give it, in your $http call (along with url and method) have a data property which has a value that is equal to another object with a key of message and a value of the message being passed to parse. IE data: {message: yourMessage}
  //Also, remember that $http returns a promise. So if you return the whole $http call (return $http(...)), you can then use .then in your controller.
});
