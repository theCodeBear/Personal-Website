'use strict';

angular.module('krone')

.controller('PortfolioCtrl', function($scope) {

  $scope.projects = [
    {
      title: 'Uno Annum',
      url: 'https://github.com/theCodeBear/Uno-Annum-mobile',
      description: 'A social year-long photo journal capturing transformations of mind, body, soul, life.',
      picture: 'img/unoAnnum.png',
      techs: ['Ionic', 'Angular', 'Express', 'MongoDB', 'AWS_S3']
    },
    // {
    //   title: 'Training Buds',
    //   url: 'https://github.com/theCodeBear/social-fit',
    //   description: 'Train with friends from anywhere. A fitness app that allows you to workout in real-time with your training partners.',
    //   picture: '',
    //   techs: ['Ionic', 'Angular', 'Express', 'MongoDB', 'Socket.io']
    // },
    {
      title: 'blip',
      url: 'https://github.com/theCodeBear/_blip',
      description: 'Real-time social discovery of local hotspots. Users can see where people are socializing on the map and see a stream of their comments.',
      picture: 'img/blip_screenshot.jpg',
      techs: ['Ionic', 'Angular', 'Express', 'MongoDB', 'Socket.io']
    },
    {
      title: 'PickUp',
      url: 'https://github.com/theCodeBear/pickUP',
      description: 'A hybrid-mobile dating app in which users can drop pick up lines at their location and other users pick up and respond to them.',
      picture: 'img/pickup_screenshot.png',
      techs: ['Ionic', 'Angular', 'ngCordova', 'JavaScript', 'Firebase']
    },
    {
      title: 'CyCard',
      url: 'https://github.com/theCodeBear/CyCard',
      description: 'Work in progress. A hybrid-mobile app for creating and exchanging digital business cards with professional contacts.',
      picture: 'img/cycard_screenshot.png',
      techs: ['Ionic', 'Angular', 'JavaScript', 'Parse']
    },
    {
      title: 'Eddie Exchange',
      url: 'https://eddie-exchange.herokuapp.com',
      description: 'This online marketplace for trading items between users was created by myself and a student at Coding House through pair-programming.',
      picture: 'img/Eddie-Exchange-pic.png',
      techs: ['Jade', 'Angular', 'Hapi.js', 'MongoDB', 'Mandrill']
    },
    {
      title: "Kid Math",
      url: "https://morning-eyrie-5597.herokuapp.com",
      description: "Basic math app for children to learn arithmetic. Currently only basic functionality. Note: if on your computer, view in browser 'device mode' as the app is designed for mobile devices only.",
      picture: "img/KidMath_pic.png",
      techs: ["JavaScript", "Angular"]
    },
    {
      title: "Drawing Demo",
      url: "projects/canvasDemo.html",
      description: "Demo Drawing Project using the HTML5 Canvas.",
      picture: "img/CanvasDraw_screenShot.png",
      techs: ["JavaScript", "jQuery", "HTML5 Canvas"]
    }
  ];

});