'use strict';

angular.module('krone')

.controller('PortfolioCtrl', function($scope) {

  $scope.projects = [
    {
      title: 'HeyU',
      url: 'https://github.com/theCodeBear/HeyU',
      description: 'The quickest way to meet people nearby. A local chatting app that gives you 10 minutes to chat before you decide to say goodbye or meet. Available in Google Play Store.',
      picture: 'img/heyu_screenshot.png',
      techs: ['Ionic', 'Angular', 'Node', 'Mongo', 'Socket.io', 'ES6', 'Gulp']
    },
    {
      title: 'Wirez',
      url: 'https://github.com/theCodeBear/Wireframing-app-test',
      description: 'An easy to use wireframing/prototyping tool to create basic designs and test the flow of your apps.',
      picture: 'img/wirez_screenshot.png',
      techs: ['HTML', 'CSS', 'JavaScript', 'jQuery UI', 'Parse']
    },
    {
      title: "Kid Math",
      url: "https://play.google.com/store/apps/details?id=com.kronospherelabs.kidmath",
      description: "A hybrid-mobile app designed to help kids practice and learn Math on the Elementary School level.",
      picture: "img/KidMath_pic.png",
      techs: ["HTML", "SASS", "JavaScript", "Angular", "Ionic", "Gulp", "ES6"]
    },
    {
      title: 'Quick Links',
      url: 'https://chrome.google.com/webstore/detail/quicklinks/gjalfolejbafbloobnblbfihmhbgdhhe?hl=en-US&gl=US',
      description: 'Speed dial for the internet. A Google Chrome Extension for saving and using custom keys to link to your favorite sites. Find it in the Chrome Web Store.',
      picture: 'img/quicklinks_screenshot.png',
      techs: ['HTML', 'CSS', 'JavaScript', 'Chrome APIs']
    },
    {
      title: 'Quick Quotes',
      url: 'https://chrome.google.com/webstore/detail/quick-quotes/ffbpeppefgiiadaogddjejkgfhlpnbni?hl=en-US&utm_source=chrome-ntp-launcher',
      description: 'A Chrome Extension that lets you select and save quotes you find on the internet and view and link back to them later.',
      picture: 'img/quickquotes_screenshot.png',
      techs: ['HTML', 'CSS', 'JavaScript', 'Chrome APIs']
    },
    // {
    //   title: 'Uno Annum',
    //   url: 'https://github.com/theCodeBear/Uno-Annum-mobile',
    //   description: 'A social year-long photo journal capturing transformations of mind, body, soul, life.',
    //   picture: 'img/unoAnnum.png',
    //   techs: ['Ionic', 'Angular', 'Express', 'MongoDB', 'AWS_S3']
    // },
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
      title: 'know',
      url: 'https://play.google.com/store/apps/details?id=com.ionicframework.know313369',
      description: 'A simple flashcard mobile app for creating and viewing digital flashcards. Now in the Google Play store.',
      picture: 'img/know_screenshot.png',
      techs: ['Ionic', 'Angular', 'Gulp', 'ES6']
    },
    // {
    //   title: 'PickUp',
    //   url: 'https://github.com/theCodeBear/pickUP',
    //   description: 'A hybrid-mobile dating app in which users can drop pick up lines at their location and other users pick up and respond to them.',
    //   picture: 'img/pickup_screenshot.png',
    //   techs: ['Ionic', 'Angular', 'ngCordova', 'JavaScript', 'Firebase']
    // },
    // {
    //   title: 'CyCard',
    //   url: 'https://github.com/theCodeBear/CyCard',
    //   description: 'Work in progress. A hybrid-mobile app for creating and exchanging digital business cards with professional contacts.',
    //   picture: 'img/cycard_screenshot.png',
    //   techs: ['Ionic', 'Angular', 'JavaScript', 'Parse']
    // },
    {
      title: 'Eddie Exchange',
      url: 'https://eddie-exchange.herokuapp.com',
      description: 'This online marketplace for trading items between users was created by myself and a student at Coding House through pair-programming.',
      picture: 'img/Eddie-Exchange-pic.png',
      techs: ['Jade', 'Angular', 'Hapi.js', 'MongoDB', 'Mandrill']
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