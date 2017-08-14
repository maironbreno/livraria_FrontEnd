angular.module('livraria.livro')
.service('livroAPI', function($http, api){

	return {
		listarLivros: listarLivros
	}

	function listarLivros(){
		var request ={
			method: 'get',
			url: api.url + '/livraria/livro'
		}
	}

});