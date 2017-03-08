angular.module('heroes', [])
  .service('heroService', HeroService)

  .component('heroes', {
    template: '<h2>Movie Info</h2><ng-outlet></ng-outlet>',
    $routeConfig: [
      {path: '/',    name: 'HeroList',   component: 'heroList', useAsDefault: true},
      {path: '/:id', name: 'HeroDetail', component: 'heroDetail'}
    ]
  })

  .component('heroList', {
    template:
      '<div ng-repeat="hero in $ctrl.heroes" ' +
      '     ng-class="{ selected: $ctrl.isSelected(hero) }">\n' +
        '<a ng-link="[\'HeroDetail\', {id: hero.id}]">{{hero.name}}</a>\n' +
      '</div>',
    controller: HeroListComponent
  })

  .component('heroDetail', {
    template:
      '<div ng-if="$ctrl.hero">\n' +
      '  <h3>"{{$ctrl.hero.name}}"</h3>\n' +
      '  <h4>Synopsis</h4>\n' +
      '  <p>"{{$ctrl.hero.info}}"</p>\n' +
      '  <div>\n' +
      '    <label>Id: </label>{{$ctrl.hero.id}}</div>\n' +
      '  <div>\n' +
      '    <label>Name: </label>\n' +
      '    <input ng-model="$ctrl.hero.name" placeholder="name"/>\n' +
      '  </div>\n' +
      '  <button ng-click="$ctrl.gotoHeroes()">Back</button>\n' +
      '</div>\n',
    bindings: { $router: '<' },
    controller: HeroDetailComponent
  });


function HeroService($q) {
  var heroesPromise = $q.resolve([
    { id: 11, name: 'Logan', info: "In a hideout near the U.S./Mexico border, an aging Logan (Hugh Jackman) cares for the ailing Professor X (Patrick Stewart). However, their sheltered existence comes to a sudden end when a young mutant girl (Dafne Keen) arrives and needs their help to stay safe. James Mangold directed this film, the third Wolverine-based spin-off of the X-Men franchise. ~ Daniel Gelb, Rovi" },
    { id: 12, name: 'Hidden Figures', info: "Three female African-American mathematicians (Taraji P. Henson, Octavia L. Spencer, and Janelle Monae) provide crucial calculations for NASA's space race against the Soviets, all while dealing with the racist and sexist assumptions of their white co-workers. Kevin Costner, Kirsten Dunst, and Jim Parsons co-star in this adaptation of the book of the same name by Margot Lee Shetterly. Directed by Theodore Melfi. ~ Jack Rodgers, Rovi" },
    { id: 13, name: 'The Lego Batman Movie', info: "Batman (voice of Will Arnett) defends Gotham City from criminals and supervillains while bonding with a young orphan (Michael Cera) he accidentally adopted -- who, of course, eventually becomes his sidekick Robin. This spin-off of The Lego Movie also features the voices of Rosario Dawson as Batgirl, Zach Galifianakis as the Joker, and Ralph Fiennes as Batman's loyal butler Alfred Pennyworth. Directed by Chris McKay (Robot Chicken). ~ Daniel Gelb, Rovi" },
    { id: 14, name: 'John Wick 2', info: "Legendary hitman John Wick (Keanu Reeves) is once again called out of retirement, this time by a former colleague (Riccardo Scamarcio) who wants him to repay a debt by killing an Italian crime lord (Claudia Gerini). But when the attempted assassination goes awry, Wick finds himself hunted by an international cabal of killers, and his only hope for survival might be a shadowy figure known as the Bowery King (Laurence Fishburne). Director Chad Stahelski and screenwriter Derek Kolstad return for this sequel to their 2014 cult action hit. Ian McShane, Ruby Rose, John Leguizamo, Common, Lance Reddick, and Bridget Moynahan co-star. ~ Daniel Gelb, Rovi" },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' }
  ]);

  this.getHeroes = function() {
    return heroesPromise;
  };

  this.getHero = function(id) {
    return heroesPromise.then(function(heroes) {
      for (var i = 0; i < heroes.length; i++) {
        if (heroes[i].id === id) return heroes[i];
      }
    });
  };
}

function HeroListComponent(heroService) {
  var selectedId = null;
  var $ctrl = this;

  this.$routerOnActivate = function(next) {
    // Load up the heroes for this view
    heroService.getHeroes().then(function(heroes) {
      $ctrl.heroes = heroes;
      selectedId = next.params.id;
    });
  };

  this.isSelected = function(hero) {
    return (hero.id === selectedId);
  };
}

function HeroDetailComponent(heroService) {
  var $ctrl = this;

  this.$routerOnActivate = function(next) {
    // Get the hero identified by the route parameter
    var id = next.params.id;
    heroService.getHero(id).then(function(hero) {
      $ctrl.hero = hero;
    });
  };

  this.gotoHeroes = function() {
    var heroId = this.hero && this.hero.id;
    this.$router.navigate(['HeroList', {id: heroId}]);
  };
}