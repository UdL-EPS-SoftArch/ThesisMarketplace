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
    'spring-data-rest',
    'angularBasicAuth'
  ])
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {        // Home page
        url: '/',
        templateUrl: 'views/home.html'})
      .state('login', {       // Login
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl' })
      .state('logout', {       // Logout
        url: '/logout',
        controller: 'LogoutCtrl' })
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
