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

	

/*var appStart = angular.module("AntonApp", []);
appStart.controller("GameController", ['$scope', function($scope){

var words = ['rat', 'cat', 'bat', 'mat'];
$scope.incorrectLettersChosen = [];
$scope.correctLettersChosen = [];
$scope.gusses = 6;
$scope.displayWord = '';
$scope.input = {
	letter : ''


}

var selectRandomWord = function(){
	var i = Math.round(Math.random() * words.length)
	return words[i];
}

var newGame = function(){

	$scope.incorrectLettersChosen = [];
	$scope.correctLettersChosen = [];
	$scope.gusses = 6;
	$scope.displayWord = '';

	selectedWord = selectRandomWord();
	console.log(selectedWord)
	var tempDisplayWord = '';
	for (var i = 0; i < selectedWord.length; i++) {
		tempDisplayWord +='*'
		}
		console.log(tempDisplayWord)
		$scope.displayWord = tempDisplayWord;

}

$scope.letterChosen = function(){

	for (var i = 0; i < $scope.correctLettersChosen.length; i++) {
		if($scope.correctLettersChosen[i].toLowerCase() == $scope.input.letter.toLowerCase()){
			$scope.input.letter = "";
			return;
		}
	}

	for (var i = 0; i < $scope.incorrectLettersChosen.length; i++) {
		if($scope.incorrectLettersChosen[i].toLowerCase() == $scope.input.letter.toLowerCase()){
			$scope.input.letter = "";
			return;
		}
	}

	console.log($scope.input.letter);
	var correct = false;
	for (var i = 0; i < selectedWord.length; i++) {
		if(selectedWord[i].toLowerCase() == $scope.input.letter[i].toLowerCase()){
			$scope.displayWord = $scope.displayWord.slice(0, i) + $scope.input.letter[i].toLowerCase() + $scope.displayWord.slice(i + 1);
			correct = true;
		}
	}
	if(correct){
		$scope.correctLettersChosen.push($scope.input.letter.toLowerCase());
	} else {
		$scope.incorrectLettersChosen.push($scope.input.letter.toLowerCase());
	}
	$scope.input.letter = "";
}

newGame();*/

// appStart.config(function($routeProvider) {
// 	$routeProvider
// 	.when('/', {
// 		templateUrl: 'login.html'
// 	})
// });
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
