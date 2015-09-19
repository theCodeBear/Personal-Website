'use strict';

angular.module('krone')

.controller('ContactCtrl', function($scope, $http) {

  $scope.clearForm = function() {
    $scope.contact.email = '';
    $scope.contact.name = '';
    $scope.contact.title = '';
    $scope.contact.message = '';
  }

  $scope.sendEmail = function() {
    var email = {
      key: 'Ds4ZZAguZEOpIfx2G54uAg',
      message: {
        html: '<p>' + $scope.contact.message + ' </p>',
        text: $scope.contact.message,
        subject: "Todd's Website: " + $scope.contact.title,
        from_email: $scope.contact.email,
        from_name: $scope.contact.name,
        to: [{
          email: 'toddkronenberg@gmail.com',
          name: 'Todd Kronenberg',
          type: 'to'
        }]
      }
    };

    $http.post('https://mandrillapp.com/api/1.0/messages/send.json', email).success(function(msg) {
      $scope.clearForm();
      angular.element('#emailedMeModal').modal('show');
    }).error(function(msg) {
      $scope.clearForm();
      // console.log('error', msg);
      alert('Error sending the email');
    });
  };

});