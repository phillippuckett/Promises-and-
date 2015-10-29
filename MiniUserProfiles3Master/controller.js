/*var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {
  $scope.getUsers = function() {
    mainService.getUsers().then(function(dataFromService) {
      $scope.users = dataFromService.data.data;
    });
  }

  $scope.getUsers();

}); */

/*--------------------------------------->
// MINI PROJECT FOR CONTROLLER //

// 3 //
Right now, our code should still work the same, 
so what's the point of $q? Why are we adding all of this 
weird code to our service?

Well imagine you wanted to make a change to your data before 
you sent it over to the controller. For instance, currently we 
have this happening in our controller:     
    
    mainService.getUsers().then(function(dataFromService) {
      $scope.users = dataFromService.data.data;
    });
  }
  
dataFromService.data.data??? We are loading a lot of unnecessary data 
into our $scope object.  

// 5 //
Now our controller can just take what it's given and not have to filter
anything out. Like so:  

       $scope.users = dataFromService.data.data; 
       $scope.users = dataFromService;         
       
<---------------------------------------*/

var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {
  $scope.getUsers = function() {
    mainService.getUsers().then(function(dataFromService) {
      $scope.users = dataFromService;
    });
  }

  $scope.getUsers();

});