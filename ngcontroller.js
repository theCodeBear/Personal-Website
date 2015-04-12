angular.module('krone', [])

.controller('main', ['$scope', '$http', function($scope, $http) {
  $scope.projects = [
    {
      title: 'Eddie Exchange',
      url: 'https://eddie-exchange.herokuapp.com',
      description: 'This online marketplace for trading items between users was created by myself and a student at Coding House through pair-programming. Built in Hapi.js and Angular, trades are made through the website and users are notified by email through the use of the Mandrill API.',
      picture: 'img/Eddie-Exchange-pic.png',
      techs: ['Jade', 'Angular', 'Hapi.js', 'Mongoose', 'Mandrill']
    },
    {
      title: "Kid Math",
      url: "https://morning-eyrie-5597.herokuapp.com",
      description: "Basic math app for children to learn arithmetic. Currently only basic functionality. Note: view in 'device mode' as the app is styled for mobile devices.",
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
