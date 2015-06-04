var modulo = angular.module("app.introducao", []);

modulo.controller("MeuController", function($scope) {

	$scope.nome = "Everton";
	$scope.sobrenome = "Tavares";

	$scope.exibeNome = function() {
		alert("O nome agora é "+$scope.nome);
	}

});