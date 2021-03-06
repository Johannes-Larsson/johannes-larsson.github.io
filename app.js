/*global angular*/
angular.module('app', ['ngRoute'])

.controller('NavController', function($scope, $route, $location) {
   $scope.isActive = function(href) {
       console.log('location: ', $location.url());
       if (href == $location.url()) return 'active';
       else return '';
   };
   
})

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/home', { templateUrl: 'views/home.html' })
    .when('/europe', { templateUrl: 'views/europe.html' })
    .when('/games', { templateUrl: 'views/games.html', controller: 'GamesController' })
    .otherwise('/home');
    
    //$locationProvider.html5Mode({enabled: true, requireBase: false});
}])

.controller('GamesController', function($scope) {
    $scope.games = [
      { 
          name: 'Dungeon Dummy',
          about: 'A game for a game jam in Malmö. Go from room to room killing enemies to gain points.',
          img: 'images/dd.png',
          links: [
              { name: 'Github', href: 'https://github.com/GlobalGameJam2015-Snittarna/QaosGameJam' },
              { name: 'itch.io', href: 'http://johannes.itch.io/dungeon-dummy' }              
          ]},
      { 
          name: 'Minaret Builder', 
          about: 'A game for Arabic Game Jam in Malmö. Stack pieces to build the highest minaret.',
          img: 'images/minaret.png',
          links: [
              { name: 'Github', href: 'https://github.com/Johannes-Larsson/Minaret-Builder' },
              { name: 'itch.io', href: 'http://johannes.itch.io/minaretbuilder' },
              { name: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.larsson.johannes.minaretBuilder.android' }
          ]},
      { 
          name: 'Flappy Gus',
          about: 'Flappy Bird clone, where the bird is Gus Sorola from Rooster Teeth.',
          img: 'images/gus.png',
          links: [
              { name: 'Github', href: 'https://github.com/Johannes-Larsson/Flappy-Gus' },
              { name: 'itch.io', href: 'http://johannes.itch.io/flappy-gus' }              
          ]},
      {
        name: 'Zeal the Deal',
        about: 'Megaman style platformer for Global Game Jam 2016.',
        img: 'images/ztd.png',
        links: [
          { name: 'Github', href: 'https://github.com/GlobalGameJam2015-Snittarna/GGJ-2016' },
          { name: 'Global Game Jam site', href: 'http://globalgamejam.org/2016/games/zeal-deal' }
        ]
      }
    ];
})