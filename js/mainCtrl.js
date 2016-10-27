angular.module('chatroom').controller('mainCtrl', function($scope, messageService){

  //The getMessages function will call the getData method on the messageService object.
  //You'll then save the result of that request to your controller's $scope as messages ($scope.messages)
  $scope.getMessages = function() {
      messageService.getMessages().then(function(jsonObj){//then function will take the return of messageService.getMessages as its argument
      console.log(jsonObj); //this will log the obj sent back from the api, the api recieved this from the server's database
      $scope.messages = jsonObj.data.reverse();//making a prop on scope that is set the the value of prop data on the jsonobj
    });
  }


  //The postMessage function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postMessage method on the messageService object which will
  //then post it to the backend.
  $scope.postMessage = function(message){
    messageService.postMessage(message).then(function(response){//from input ?
      console.log(response);
      $scope.message = '';
    });
  }


  //uncomment this code when your getMessages function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.
   setInterval(function(){
    $scope.getMessages();

  }, 1500)

})
