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
}).when('/view1/:nummber', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
});
}])
.controller('View1Ctrl',function($scope,service) {
   
  $scope.nummber=7;
      $scope.array=[];
      $scope.addMessage=function(message){
      $scope.array.push(message);
      service.addMessage(message);
   };
  $scope.newarray = service.getArray();
   $scope.game = "Hallo World";

   $scope.setId=function(id){
    console.log(id);
  $scope.articleId=id;

 };

 $scope.minusId=function(id){
  console.log(id);
if($scope.articleId> 5)
   $scope.articleId=id-5;
else
  if($scope.articleId== 4)
    $scope.articleId=id-4;
  else
    if($scope.articleId> 3)
       $scope.articleId=id-3;
     else
      if($scope.articleId> 2)
         $scope.articleId=id-2;
       else
        if($scope.articleId> 1)
           $scope.articleId=id-1;
 };
 $scope.pliusId=function(id){
  console.log(id);
if(id<50)
   $scope.articleId=id+5;
 };
 
});
