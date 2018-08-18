app.directive("feedPost", function() {
  return {
    restrict: 'E',
    scope: {
      post: '='
    },
    templateUrl: 'js/directives/feedPost.html'
  }
});