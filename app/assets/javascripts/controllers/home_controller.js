belAir.controller('HomeController', ['Shows', '$scope', function(Shows, $scope) {
    Shows.index().then(function (response) {
      $scope.shows = response.data.shows;

      console.log($scope.shows);
    });
}]);
