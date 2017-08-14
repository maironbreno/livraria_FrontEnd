(function(){
	'use strict'
	angular.module('livraria.livro').controller('LivroController', LivroController);

	LivroController.$inject = ['$scope', 'livroAPI'];

	function LivroController($scope, livroAPI){
		var vm = this;

		vm.listarLivros = function(){
			//livroAPI.listarLivros()
			//.then(function(obj){
				vm.livros=["LIVRO 1","LIVRO 2"," LIVRO 3"];
				//vm.livros = obj.data;
			//})
		}

		var main = function(){
			vm.listarLivros();
		}
		main();
	}
})();