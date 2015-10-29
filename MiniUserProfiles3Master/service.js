/*var app = angular.module('userProfiles');

app.service('mainService', function ($http) {

  this.getUsers = function () {
    return $http({
      method: 'GET',
      url: 'http://reqres.in/api/users?page=1'
    })
  }

}); */

/*--------------------------------------->
// MINI PROJECT FOR SERVICE //
// 1 //
Inject "$q"" into the service:

app.service('mainService', function($http) {
app.service('mainService', function($http, $q) {

Once injected we can begin using it by adding 
a deffered variable to handle it


  this.getUsers = function() {
    return $http({

  this.getUsers = function() {
    var deferred = $q.defer();
    return $http({
     
// 2 //     
Now let's add a promise to our service:

app.service('mainService', function ($http) {

  this.getUsers = function () {
    return $http({
      method: 'GET',
      url: 'http://reqres.in/api/users?page=1'
    })
  }

  this.getUsers = function() {
    var deferred = $q.defer();
    return $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
    }).then(function(response) {
      deferred.resolve(response)
    })
    return deferred.promise;
  }

// 4 //
Rather than filter it out in our controller we 
can use $q to filter it out as we pull it through our service:

    }).then(function(response) {
      deferred.resolve(response)

    }).then(function(response) {
      var parsedResponse = response.data.data
      deferred.resolve(parsedResponse)    
 
Let's go ahead and do something a little less relevant, but more fun. 
Let's change everyones first_name in the service to Ralf.  

    var deferred = $q.defer();
    return $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
    }).then(function(response) {
      var parsedResponse = response.data.data
      deferred.resolve(response)

     var deferred = $q.defer();
    $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
    }).then(function(response) {
      var parsedResponse = response.data.data
      for(var i = 0; i < parsedResponse.length; i++) {
        parsedResponse[i].first_name = 'Ralf'
      }
      deferred.resolve(parsedResponse)
      
Now all of our user's first names are Ralf. 
While it isn't a very good real world example, 
it's good to see how we can manipulate things. $q!

<---------------------------------------*/

var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {
  this.getUsers = function() {
    var deferred = $q.defer();
    $http({
        method: 'GET',
        url: 'http://reqres.in/api/users?page=1'
    }).then(function(response) {
      var parsedResponse = response.data.data;
      for(var i = 0; i < parsedResponse.length; i++) {
        parsedResponse[i].first_name = 'Ralf'
      }
      deferred.resolve(parsedResponse)
    })
    return deferred.promise;
  }
});