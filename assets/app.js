angular.module('App', [
	'angularSails.base', 
	'ngRoute'
]);

angular.module('App').config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.
			when('/App', {
				templateUrl: 'modules/app/app.html'
			}).otherwise({
				redirectTo: '/App'
			});
		}]);