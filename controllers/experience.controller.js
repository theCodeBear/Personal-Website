'use strict';

angular.module('krone')

.controller('ExperienceCtrl', function($scope) {

  $scope.experience = [
    {
      company: 'Activ Health',
      logo: 'img/activ_logo.png',
      jobTitle: 'JavaScript Developer',
      years: '2015',
      description: 'Fullstack JavaScript developer working on two mobile apps and a website, along with a Node.js/Sails backend API. Main responsibilities involved working on the two hybrid mobile apps built in Angular and Ionic.'
    },
    {
      company: 'Coding House',
      logo: 'img/codinghouse_logo.png',
      jobTitle: 'Teaching Assistant & Student',
      years: '2014 - 2015',
      description: 'Attended Coding House web development bootcamp to learn fullstack JavaScript web development in late 2014. Worked as a Teaching Assistant in early 2015. As a TA I helped students during all day lectures. Writing articles on related topics. Meeting with students to make sure their goals are being met and check their progress. Tutoring students who need help.',
      backgroundColor: 'black'
    },
    {
      company: 'Wentworth Institute of Technology',
      logo: 'img/WITcrest.png',
      jobTitle: 'Computer Science Student',
      years: '2011 - 2013',
      description: "Attended Wentworth as an undergrad in their Computer Science program. Took courses in C, C++, Java, Assembly Language, Operating Systems, Computer Graphics, Data Structures, Algorithms, Web Development, Computer Architecture, and more."
    }
  ];

});