'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
      
  });
}])

.controller('View1Ctrl', function($scope) {
   

    if (window.File && window.FileReader && window.FileList && window.Blob) {
       
    } else {
        alert('The File APIs are not fully supported in this browser.');
    }
   
    $scope.game = "Hallo World";
    
   
    
});
