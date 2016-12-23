angular.module('app',[])
.controller('main.ctrl', function($scope, $http){

  $scope.colors = ['#d11141', '#00b159' , '#00aedb', '#f37735', '#ffc425'];

  $http.get('data365.json').then(function(res){

    var data = res.data;
    var list = [];

    for(var key in data){

      list.push(angular.extend({
        index: +key.replace(/-/g,''),
        day: key,
        category: data[key].path.split('/')[0]
      }, data[key]))

    }
    $scope.list = list;
    console.log($scope.list)

  })
});
