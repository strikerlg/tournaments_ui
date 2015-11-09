var tournamentsApp = angular.module('tournamentsApp', []);

tournamentsApp.controller('TournamentListCtrl', function ($scope) {
  $scope.tournaments = [
    {'name': 'Rebenta Caixotes Torneio de Natal',
     'participants': 12,
     'date': '24/12/2015'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'participants': 10},
    {'name': 'MOTOROLA XOOM™',
     'participants': 8}
  ];
});