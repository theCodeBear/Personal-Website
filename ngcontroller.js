angular.module('krone', [])

.controller('main', ['$scope', '$http', function($scope, $http) {
  $scope.projects = [
    {
      title: 'PickUp',
      url: '#',
      description: 'Work in progress. A hybrid-mobile dating app built with the Ionic framework, in which users can drop pick up lines in their geographical spot and any other app users find these pick up lines and can respond to them, users then match to each other.',
      picture: 'img/pickup_screenshot.png',
      techs: ['Ionic', 'Angular', 'ngCordova', 'JavaScript', 'Firebase']
    },
    {
      title: 'blip',
      url: '#',
      description: 'Work in progress. A hybrid-mobile app for realtime social discovery of local hotspots. Users drop blips on a map and can view blips from all other users. Blips display on the map with short description of what is happening. Users can see where people are socializing on the map and see a stream of their comments.',
      picture: 'img/blip_screenshot.jpg',
      techs: ['Ionic', 'Angular', 'ngCordova', 'JavaScript', 'Firebase']
    },
    {
      title: 'CyCard',
      url: '#',
      description: 'Work in progress. A hybrid-mobile app for creating and exchanging digital business cards with professional contacts.',
      picture: 'img/cycard_screenshot.png',
      techs: ['Ionic', 'Angular', 'JavaScript', 'Parse']
    },
    {
      title: 'Eddie Exchange',
      url: 'https://eddie-exchange.herokuapp.com',
      description: 'This online marketplace for trading items between users was created by myself and a student at Coding House through pair-programming. Built in Hapi.js and Angular, trades are made through the website and users are notified by email through the use of the Mandrill API.',
      picture: 'img/Eddie-Exchange-pic.png',
      techs: ['Jade', 'Angular', 'Hapi.js', 'MongoDB', 'Mandrill']
    },
    {
      title: "Kid Math",
      url: "https://morning-eyrie-5597.herokuapp.com",
      description: "Basic math app for children to learn arithmetic. Currently only basic functionality. Note: if on your computer, view in 'device mode' as the app is designed for mobile devices only.",
      picture: "img/KidMath_pic.png",
      techs: ["JavaScript", "Angular"]
    },
    {
      title: "Drawing Demo",
      url: "projects/canvasDemo.html",
      description: "Demo Drawing Project to learn how to use the HTML5 Canvas.",
      picture: "img/CanvasDraw_screenShot.png",
      techs: ["JavaScript", "jQuery", "HTML5 Canvas"]
    }
  ];

  $scope.logos = [
    'img/html5-logo.png',
    'img/css3-logo.png',
    'img/js-logo.png',
    'img/bootstrap-logo.png',
    'img/jquery-logo.png',
    'img/node-logo.png',
    'img/angular-logo.png',
    'img/hapi-logo.png'
    // 'img/mongo-db-logo.png',
    // 'img/vim-logo.png'
  ];

  $scope.clearForm = function() {
    $scope.email = '';
    $scope.name = '';
    $scope.msgTitle = '';
    $scope.msg = '';
  }

  $scope.hireMe = function() {
    var email = {
      key: 'Ds4ZZAguZEOpIfx2G54uAg',
      message: {
        html: '<p>' + $scope.msg + ' </p>',
        text: $scope.msg,
        subject: "Todd's Website: " + $scope.msgTitle,
        from_email: $scope.email,
        from_name: $scope.name,
        to: [{
          email: 'toddkronenberg@gmail.com',
          name: 'Todd Kronenberg',
          type: 'to'
        }]
      }
    };

    $http.post('https://mandrillapp.com/api/1.0/messages/send.json', email).success(function(msg) {
      $scope.email = '';
      $scope.name = '';
      $scope.msgTitle = '';
      $scope.msg = '';
    }).error(function(msg) {
      $scope.email = '';
      $scope.name = '';
      $scope.msgTitle = '';
      $scope.msg = '';
      // console.log('error', msg);
      alert('error sending the email');
    });
  };

}]);
