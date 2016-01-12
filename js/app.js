'use strict';

// Configure the main application module.
var app = angular.module('app', ['ui.router', 'ui.bootstrap'])
/*Constants regarding user login defined here*/
.constant('USER_ROLES', {
	all : '*',
	admin : 'admin',
	student : 'student',
	recruiter : 'recruiter'
}).constant('AUTH_EVENTS', {
	loginSuccess : 'auth-login-success',
	loginFailed : 'auth-login-failed',
	logoutSuccess : 'auth-logout-success',
	sessionTimeout : 'auth-session-timeout',
	notAuthenticated : 'auth-not-authenticated',
	notAuthorized : 'auth-not-authorized'
})
/* Adding the auth interceptor here, to check every $http request*/
.config(function ($httpProvider) {
  $httpProvider.interceptors.push([
    '$injector',
    function ($injector) {
      return $injector.get('AuthInterceptor');
    }
  ]);
})
