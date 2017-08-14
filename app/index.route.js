(function(){
	'use strict';

	angular.module('livraria').config(RouterConfig);

	function RouterConfig($routeProvider){

		$routeProvider.when('/livro',{
			templateUrl: 'app/template/livro/livro.html',
			controller: 'LivroController',
			controllerAs: 'vm'
		})
		.otherwise({redirectTo: '/'});
	}
})();