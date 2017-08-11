(function(){
	'use strict';

	angular.module('livraria').config(RouterConfig);

	function RouterConfig($routerProvider){

		$routeProvider.when('/livro',{
			templateUrl: 'app/template/livro.html',
			controller: 'LivroController',
			controllerAs: 'vm'
		})

		.otherwise({redirectTo: '/'});
	}
})();