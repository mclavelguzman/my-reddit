(function() {

var app = angular.module('starter', ['ionic'])

app.controller('RedditCtrl', function($scope) {

  $scope.stories = [
  {
    title: 'First Story'
  },
  {
    title: 'Second Story'
  },
  {
    title: 'Third Story'
  }
  ];

});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      // cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
 });
}());
