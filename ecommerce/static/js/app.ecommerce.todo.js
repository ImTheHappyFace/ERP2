app.controller('businessManagement.ecommerce.todo', function($scope, $http, $aside, $state, Flash, $users, $filter, $permissions, $sce) {


  $scope.data = {
    tableData: []
  };

  views = [{
    name: 'list',
    icon: 'fa-th-large',
    template: '/static/ngTemplates/genericTable/genericSearchList.html',
    itemTemplate: '/static/ngTemplates/app.ecommerce.todo.item.html',
  }, ];


  $scope.config = {
    views: views,
    url: '/api/ecommerce/todo/',
    searchField: 'name',
    deletable: true,
    itemsNumPerView: [2, 4, 8, 16, 32, 48],
  }


  $scope.tableAction = function(target, action, mode) {
    console.log(target, action, mode);
    console.log($scope.data.tableData);

    for (var i = 0; i < $scope.data.tableData.length; i++) {
      if ($scope.data.tableData[i].pk == parseInt(target)) {
        if (action == 'edit') {
          var title = 'Edit Todo :';
          var appType = 'todoEditor';
        } else if (action == 'details') {
          var title = 'Details :';
          var appType = 'todoExplorer';
        }


        console.log({
          title: title + $scope.data.tableData[i].name,
          cancel: true,
          app: appType,
          data: {
            pk: target,
            index: i
          },
          active: true
        });


        $scope.addTab({
          title: title + $scope.data.tableData[i].name,
          cancel: true,
          app: appType,
          data: {
            pk: target,
            index: i,
            data:$scope.data.tableData[i]
          },
          active: true
        })
      }
    }

  }


  $scope.tabs = [];
  $scope.searchTabActive = true;

  $scope.closeTab = function(index) {
    $scope.tabs.splice(index, 1)
  }

  $scope.addTab = function(input) {
    console.log(JSON.stringify(input));
    $scope.searchTabActive = false;
    alreadyOpen = false;
    for (var i = 0; i < $scope.tabs.length; i++) {
      if ($scope.tabs[i].data.pk == input.data.pk && $scope.tabs[i].app == input.app) {
        $scope.tabs[i].active = true;
        alreadyOpen = true;
      } else {
        $scope.tabs[i].active = false;
      }
    }
    if (!alreadyOpen) {
      $scope.tabs.push(input)
    }
  }

  // $scope.addTab({
  //   "title": "Details :with DP5",
  //   "cancel": true,
  //   "app": "contactExplorer",
  //   "data": {
  //     "pk": 10,
  //     "index": 9
  //   },
  //   "active": true
  // })

  // $scope.$on('exploreContact', function(event, input) {
  //   console.log("recieved");
  //   console.log(input);
  //   $scope.addTab({
  //     "title": "Details :" + input.contact.name,
  //     "cancel": true,
  //     "app": "todoExplorer",
  //     "data": {
  //       "pk": input.contact.pk
  //     },
  //     "active": true
  //   })
  // });
  //
  //
  // $scope.$on('editContact', function(event, input) {
  //   console.log("recieved");
  //   console.log(input);
  //   $scope.addTab({
  //     "title": "Edit :" + input.contact.name,
  //     "cancel": true,
  //     "app": "todoEditor",
  //     "data": {
  //       "pk": input.contact.pk,
  //       contact: input.contact
  //     },
  //     "active": true
  //   })
  // });


});

app.controller("businessManagement.ecommerce.todo.form", function($scope, $state, $users, $stateParams, $http, Flash) {

      $scope.data = {
      title: '',
      name: '',
      details: '',
  }

  $scope.neData = []

  if ($scope.tab!=undefined) {
    $scope.data = $scope.tab.data.data
  }


  $scope.submit = function() {
    var   method =  'POST'
    var   url = '/api/ecommerce/todo/'
    if ($scope.data.pk) {
      var   method =  'PATCH'
      var   url = '/api/ecommerce/todo/' + $scope.data.pk +'/'

    }

    $http({
      method: method,
      url: url,
      data: $scope.data,
    }).
    then(function(response) {
      $scope.data = response.data
    })
  }
})
app.controller('businessManagement.ecommerce.todo.item', function($scope, $http, $aside, $state, Flash, $users, $filter, $permissions, $sce) {
      // // $http({
      // //   method: 'GET',
      // //   url: '/api/ecommerce/todo/' + $scope.data.pk
      // // }).
      // // then(function(response) {
      // //   $scope.insight = response.data;
      // })
      $scope.deleteCard = function(){
      console.log("Delete todo")
      $http({method : 'DELETE' , url : '/api/ecommerce/todo/'+ $scope.data.pk + '/' }).
    then(function(response) {
      $scope.insight = response.data;
      console.log("HEYYY")
    })
  }





      });
