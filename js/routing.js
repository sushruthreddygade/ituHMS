angular.module('app').config(['$stateProvider', '$urlRouterProvider', 'USER_ROLES',
function($stateProvider, $urlRouterProvider, USER_ROLES) {

  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  
  // Now set up the states
  $stateProvider
  	.state('home', {
      url: "/",
      templateUrl: "templates/home.html",
      data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.student, USER_ROLES.recruiter]
      }
    })
  	.state('state1', {
      url: "/page1",
      templateUrl: "templates/state1.html",
	  data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.recruiter,USER_ROLES.student]
      }      	  
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "templates/state2.html",
	  data: {
          authorizedRoles: [USER_ROLES.admin, USER_ROLES.recruiter]
      }
    })
    .state('adminState', {
        url: "/adminState",
        templateUrl: "templates/adminState.html",
  	  data: {
            authorizedRoles: [USER_ROLES.admin]
        }
      })
    ;
}]);