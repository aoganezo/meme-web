'use strict';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * @ngdoc function
 * @name faceDetectionTestsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the faceDetectionTestsApp
 */
angular.module('faceDetectionTestsApp')
  .controller('MainCtrl', function() {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];



});
