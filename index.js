angular.module('krone', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('portfolio', {
    url: '/',
    templateUrl: 'views/portfolio.html',
    controller: 'PortfolioCtrl'
  })

  .state('contact', {
    url: '/contact',
    templateUrl: 'views/contact.html',
    controller: 'ContactCtrl'
  })

  .state('experience', {
    url: '/experience',
    templateUrl: 'views/experience.html',
    controller: 'ExperienceCtrl'
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