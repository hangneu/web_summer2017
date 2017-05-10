angular
	.module("myApp", [])
	.controller("blog", blog);
function blog($scope, $http){
	$scope.hello = "MEAN blog";
	$scope.contents = [];
	$http.get("/api/post")
		.then(setAllPost);
	function setAllPost(response){
		$scope.contents = response.data;
	}
	$scope.createblog = function(title,body){
		var newPost = {
			title: title,
			body: body
		};
		// $scope.contents.push(newPost);
		$http.post("/api/post", newPost)
			.then(setAllPost);
	};
	$scope.remove = function(index){
		// $scope.contents.splice(index,1);
		$http.delete("/api/post/"+index)
			.then(setAllPost);
	};
}