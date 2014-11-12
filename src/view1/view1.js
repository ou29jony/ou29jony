'use strict';
angular.module('myApp.view1', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1/Presentations', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
}).when('/view1/pictures', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
}).when('/view1/landpictures', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
}).when('/view1/me', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
}).when('/view1/kontakts', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
});
}])
.controller('View1Ctrl',function($scope,service) {
  $scope.array=[];
      $scope.addMessage=function(message){
      $scope.array.push(message);
      service.addMessage(message);
   };
 
   $scope.newarray = service.getArray();
   $scope.game = "Hallo World";
   $scope.setId=function(id){
  $scope.articleId=id;
 };
});
