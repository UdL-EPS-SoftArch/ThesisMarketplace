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
      .state('home', {                // Home page
        url: '/',
        templateUrl: 'views/home.html'})
      .state('login', {               // Login
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl' })
      .state('logout', {              // Logout
        url: '/logout',
        controller: 'LogoutCtrl' })
      .state('proposals', {           // List Proposals
        url: '/proposals',
        templateUrl: 'views/proposals.html',
        controller: 'ProposalsCtrl' })
      .state('createProposal', {           // Create Proposal
        url: '/proposals/new',
        templateUrl: 'views/createProposal.html',
        controller: 'ProposalsCtrl' })
      .state('comments', {            // List Commnents
        url: '/comments',
        templateUrl: 'views/comments.html',
        controller: 'CommentsCtrl' })
      .state('createComment', {       // Create Commnent
        url: '/publishproposal/:id/comment',
        templateUrl: 'views/createComment.html',
        controller: 'CommentsCtrl' })
      .state('proposalPublication', { // ProposalPublication Details
        url: '/publishproposal/:id',
        templateUrl: 'views/proposalPublication.html',
        controller: 'ProposalPublicationCtrl' })
      .state('studentsAssignments', { // List Proposals
        url: '/studentsassignments',
        templateUrl: 'views/studentsAssignments.html',
        controller: 'StudentsAssignmentsCtrl' })
      .state('publishproposal', {     // List ProposalPublications
        url: '/publishproposal',
        templateUrl: 'views/publishproposal.html',
        controller: 'PublishProposalCtrl as publish' })
      .state('proposalSubmissions' , {// List ProposalSubmissions
        url: '/proposalSubmissions',
        templateUrl: 'views/proposalSubmissions.html',
        controller: 'ProposalSubmissionsCtrl' })
      .state('registerproposal', {    // List ProposalRegistrations
        url: '/registerproposal',
        templateUrl: 'views/registerproposal.html',
        controller: 'RegisterProposalCtrl as register' });
  })
  .run(function($state) {
    $state.go('home'); // Initial transition when app starts
  })
  .config(function (SpringDataRestInterceptorProvider) {
    SpringDataRestInterceptorProvider.apply();
  });
