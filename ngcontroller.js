angular.module('krone', [])

.controller('main', ['$scope', function($scope) {
  $scope.projects = [
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
      picture: "img/canvasDraw_screenShot.png",
      techs: ["JavaScript", "jQuery"]
    },
    {
      title: "Sigma Shooter",
      url: "projects/SigmaShooter.html",
      description: "Console Shoot 'em Up game created as my final project in a college Assembly Language course. Written using the MASM Assembler in Visual Studio 2010.",
      picture: "img/SigmaShooter_screenShot.png",
      techs: ["Assembly Language"]
    }
  ];
}]);