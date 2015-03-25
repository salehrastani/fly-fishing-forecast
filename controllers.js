weatherApp.controller('mainController', ['$scope', 'cityService', function ($scope, cityService){

  $scope.city = cityService.city;
  $scope.$watch('city', function(){
    cityService.city = $scope.city;
  });

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService){

  $scope.days = $routeParams.days || '2';

  $scope.city = cityService.city;
  $scope.weatherApi = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",{callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});
  $scope.weatherResult = $scope.weatherApi.get({q : $scope.city, cnt : $scope.days}, function(data) {
      $scope.listOfDays = data.list
    });

  $scope.convertTemperature = function(degK){
    return Math.round((1.8 * (degK - 273)) + 32);
  };

  $scope.convertDate = function(dt){
    return new Date(dt * 1000);
  };

}]);
