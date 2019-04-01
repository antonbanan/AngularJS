var appStart = angular.module("AntonApp", []);
appStart.controller("GameController", ['$scope', function($scope){

	$scope.todos = [
		{text:'Learn AngularJS', done:false}, 
		{text:'Build an app', done:false}
	];

	$scope.cleanComplited = function(){
		$scope.todos = $scope.todos.filter(function(o){
			return !o.done;
		})
	};

	$scope.addTodo = function () {
		$scope.todos.push({text:$scope.formTodoText, done:false});
		$scope.formTodoText="";
	}

	$scope.masive = [
		{text:'hi', done:false}, 
		{text:'goodbye', done:false}
	];

	


 }]);

appStart.controller('albumCtrl', ['$scope', function($scope){
	$scope.images = [
			{image : 'img/1.jpg', thumbnail : 'img/1.jpg', description :'Image 01 description'},
			{image : 'img/2.jpg', thumbnail : 'img/2.jpg', description :'Image 02 description'},
			{image : 'img/3.jpg', thumbnail : 'img/3.jpg', description :'Image 03 description'},
			{image : 'img/4.jpg', thumbnail : 'img/4.jpg', description :'Image 04 description'}

	];

 $scope.currentImage = $scope.images[0];
 $scope.setCurrentImage = function (image){
 	$scope.currentImage = image;
 }

	}]);

setInterval(function () {
	var green = document.getElementById("greenPlace");
	var yellow = document.getElementById("yellowPlace");
	var red = document.getElementById("redPlace");

setTimeout(function() { 
	red.style.backgroundColor = "red";
	green.style.backgroundColor = "black";
 }, 4000);
	green.style.backgroundColor = "";
	red.style.backgroundColor = "";

setTimeout(function() { 
	yellow.style.backgroundColor = "yellow";
 }, 2000);
setTimeout(function() { 
	yellow.style.backgroundColor = "";
 }, 4000);

setTimeout(function() { 
	yellow.style.backgroundColor = "yellow";
 }, 6000);
setTimeout(function() { 
	yellow.style.backgroundColor = "";
 }, 8000);

// if(red.style.backgroundColor = ""){
//  green.style.backgroundColor = "green";	
//   }else{
//   red.style.backgroundColor = "red"}


	





//  setInterval(function() {
//  	if(green.style.backgroundColor){
//  green.style.backgroundColor = "";	
//   }else{
//   green.style.backgroundColor = "black";}
//   }, 1000);
// setInterval(function() {
//   if(yellow.style.backgroundColor){
//  yellow.style.backgroundColor = "";	
//   }else{
//   yellow.style.backgroundColor = "black";}
//   }, 500);
// setInterval(function() {
//   if(red.style.backgroundColor){
//  red.style.backgroundColor = "";	
//   }else{
//   red.style.backgroundColor = "black";}
//   }, 2000);
	
  }, 8000);



