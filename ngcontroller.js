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
    }//,
    // {
    //   title: "Sigma Shooter",
    //   url: "projects/SigmaShooter.html",
    //   description: "Console Shoot 'em Up game created as my final project in a college Assembly Language course. Written using the MASM Assembler in Visual Studio 2010.",
    //   picture: "img/SigmaShooter_screenShot.png",
    //   techs: ["Assembly Language"]
    // },
    // {
    //   title: "Hill Cipher Encryption",
    //   url: "projects/hillcipher.html",
    //   description: "Written in C++ using the Linear Algebra-related cryptographic Hill Cipher. Plain text is converted into a matrix, then encrypted using a randomly generated 3x3 matrix. The decryption involves calculating the inverse of the encryption matrix and applying it to the cipher text.",
    //   picture: "img/LinAlg_screenShot.png",
    //   techs: ["C++"]
    // }
  ];

  $scope.clearForm = function() {
    $scope.email = '';
    $scope.name = '';
    $scope.msgTitle = '';
    $scope.msg = '';
  }

  $scope.hireMe = function() {
    // var email = {
    //   key: 'Ds4ZZAGuZEOplfx2G54uAg',
    //   message: {
    //     html: '<p> Example HTML content </p>',
    //     text: $scope.msg,
    //     subject: $scope.msgTitle,
    //     from_email: $scope.email,
    //     from_name: $scope.name,
    //     to: [{
    //       email: 'toddkronenberg@gmail.com',
    //       name: 'Todd Kronenberg',
    //       type: 'to'
    //     }]
    //   }
    // };
    console.log($scope.msg);
    console.log($scope.msgTitle);
    console.log($scope.email);
    console.log($scope.name);
    var email = {
      key: 'Ds4ZZAGuZEOplfx2G54uAg',
      message: {
        from_email: '$scope.email',
        to: [{
          email: 'toddkronenberg@gmail.com',
          type: 'to'
        }],
        autotext: 'true',
        html: '<p> Example HTML content </p>'
      }
    }

    // $.ajax({
    //   type: "POST",
    //   url: "https://mandrillapp.com/api/1.0/messages/send.json",
    //   data: email,
    //   success: function(msg){
    //     alert('email sent', msg);
    //   }, error: function(XMLHttpRequest, textStatus, errorThrown) {
    //     alert('error sending email');
    //   }
    // });

    $http.post('https://mandrillapp.com/api/1.0/messages/send.json', {data: email}).success(function(msg) {
      alert('email sent', msg);
    }).error(function(msg) {
      alert('error sending email', msg);
    });
  };

}]);