app.controller('businessManagement.ecommerce.client' , function($scope , $http , $aside , $state, Flash , $users , $filter , $permissions , $sce){

  $scope.modal = true
  $scope.todoList = [{todoText:'Clean House', done:false , todoDesc : "Clean House today "}];
  $scope.todoInput = null;
  $scope.todoAdd = function() {
    
    if($scope.todoInput != null && $scope.description!=null ){
      $scope.todoList.push({todoText:$scope.todoInput, done:false ,todoDesc : $scope.description });
      $scope.todoInput = "";
      $scope.description = " ";
    }
    else{
      alert("please enter a todo")
    }    
  };
  $scope.remove = function() {
      var oldList = $scope.todoList;
      $scope.todoList = [];
      angular.forEach(oldList, function(x) {
          if (!x.done) $scope.todoList.push(x);
      });
  };
});

