'use strict';

angular.module('krone')

.controller('PortfolioCtrl', function($scope) {

  $scope.stupidLittleGames = [
    {
      title: 'Shooter One',
      url: '/games/shooterOne',
      description: 'First Game. Made in Phaser.',
      picture: 'img/shooter1.png',
      date: 'May 2021',
      techs: ['Javascript, Phaser']
    }
  ];

  $scope.chromeExtensions = [
    {
      title: 'Quick Links',
      url: 'https://chrome.google.com/webstore/detail/quicklinks/gjalfolejbafbloobnblbfihmhbgdhhe?hl=en-US&gl=US',
      description: 'Speed dial for the internet. A Google Chrome Extension for saving and using custom keys to link to your favorite sites. Find it in the Chrome Web Store.',
      picture: 'img/quicklinks_screenshot.png',
      date: 'December 2015',
      techs: ['HTML', 'CSS', 'JavaScript', 'Chrome APIs']
    },
    {
      title: 'Quick Quotes',
      url: 'https://chrome.google.com/webstore/detail/quick-quotes/ffbpeppefgiiadaogddjejkgfhlpnbni?hl=en-US&utm_source=chrome-ntp-launcher',
      description: 'A Chrome Extension that lets you select and save quotes you find on the internet and view and link back to them later.',
      picture: 'img/quickquotes_screenshot.png',
      date: 'December 2015',
      techs: ['HTML', 'CSS', 'JavaScript', 'Chrome APIs']
    }
  ];

  $scope.superOldStuff = [
    {
      title: "Drawing Demo",
      url: "projects/canvasDemo.html",
      description: "Demo Drawing Project using the HTML5 Canvas.",
      picture: "img/CanvasDraw_screenShot.png",
      date: '2014',
      techs: ["JavaScript", "jQuery", "HTML5 Canvas"]
    },
    {
      title: 'Sigma Shooter',
      url: 'videos/SigmaShooter.mp4',
      description: "Console Shoot 'em Up game created as my final project in a college Assembly Language course. Written using the MASM Assembler in Visual Studio 2010.",
      picture: '../img/SigmaShooter_screenShot.png',
      date: '2013',
      techs: ['Assembly Language']
    }
  ];

});
