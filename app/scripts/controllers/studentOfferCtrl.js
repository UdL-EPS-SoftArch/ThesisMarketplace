/**
 * Created by victor on 27/05/16.
 */
angular.module('thesismarketApp')
  .controller('StudentOfferCtrl', function($scope, StudentOffer) {

    $scope.studentOffers = [];

    StudentOffer.query().$promise.then(function (studentOffers) {
      $scope.studentOffers = studentOffers._embeddedItems;
      $scope.studentOffers.forEach(function(studentOffer) {
        studentOffer.creator = studentOffer._resources("agent").get();
      });
    });

  });
