'use strict';

/**
 * @ngdoc overview
 * @name thesismarketApp
 * @description
 * # thesismarketApp
 *
 * Main module of the application.
 */
angular
  .module('thesismarketApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'config',
    'ui.router',
    'spring-data-rest'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {        // Home page
        url: '/',
        templateUrl: 'views/home.html'})
      .state('proposals', {   // List Proposals
        url: '/proposals',
        templateUrl: 'views/proposals.html',
        controller: 'ProposalsCtrl' })
      .state('comments', {   // List Commnents
        url: '/comments',
        templateUrl: 'views/comments.html',
        controller: 'CommentsCtrl' });
  })
  .run(function($state) {
    $state.go('home'); // Initial transition when app starts
  })
  .config(function (SpringDataRestInterceptorProvider) {
    SpringDataRestInterceptorProvider.apply();
  });
