weatherApp.directive('dailyForecasts', function(){
  return {
    restrict: 'E',
    templateUrl: 'directives/daily-forecasts.html',
    replace: true,
  }
});