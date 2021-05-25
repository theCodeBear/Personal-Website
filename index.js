angular.module('krone', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('portfolio', {
    url: '/',
    templateUrl: 'views/portfolio.html',
    controller: 'PortfolioCtrl'
  })

  .state('terminal', {
    url: '/terminal',
    templateUrl: 'views/terminal.html'
  })

  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html'
  });

});