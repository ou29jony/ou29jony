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
}]).service('service',function(){
	this.message="Aqa Var Schechemisa";
	this.jony=function(){
    return message;
	};
})*/
.controller('View1Ctrl',['$scope','service',function($scope,service) {
   // $scope.articleId=1234;
   $scope.result=service.jony();
   $scope.game = "Hallo World";
  $scope.setId=function(id){
   	$scope.articleId=id;
 };
}]);
