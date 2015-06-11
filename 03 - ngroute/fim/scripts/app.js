var modulo = angular.module("app.introducao", ['ngRoute']);

modulo.config(function($routeProvider) {

	$routeProvider.when('/', {
		template : '<h2>Página Inicial</h2>'
	})
	.when('/lista', {
		templateUrl : 'listagem.html'
	})
	.when('/edicao', {
		template : '<h2>Edição</h2>'
	})
	.otherwise({
		template : '<h2>Página não encontrada</'
	})

});