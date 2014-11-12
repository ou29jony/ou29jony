'use strict';

angular.module('myApp.service',['myApp.view1']).service('service',function(){
	var array=[];
	this.addMessage=function(message){
		
   array.push(message);
   console.log(array);
  };
   this.jony=function(){
	return message;
}
this.getArray=function(){
	return array;
}
});
	