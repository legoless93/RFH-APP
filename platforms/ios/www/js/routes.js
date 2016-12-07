angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/tabscontroller',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('searchResult', {
    url: '/food/searchResult',
    templateUrl: 'templates/searchResult.html',
    controller: 'searchResultCtrl'
  })

  .state('quickadd', {
    url: '/food/quickadd',
    templateUrl: 'templates/quickadd.html',
    controller: 'quickaddCtrl'
  })

  .state('symptonRecords', {
    url: '/sympton/recordlist',
    templateUrl: 'templates/symptonRecords.html',
    controller: 'symptonRecordsCtrl'
  })

  .state('record', {
    url: '/sympton/recorddetail',
    templateUrl: 'templates/record.html',
    controller: 'recordCtrl'
  })

  .state('tabsController.diary', {
    url: '/food/diary',
    views: {
      'tab1': {
        templateUrl: 'templates/diary.html',
        controller: 'diaryCtrl'
      }
    }
  })

  .state('tabsController.foodsearch', {
    url: '/food/search',
    views: {
      'tab2': {
        templateUrl: 'templates/foodsearch.html',
        controller: 'foodsearchCtrl'
      }
    }
  })

  .state('help', {
    url: '/food/help',
    templateUrl: 'templates/help.html',
    controller: 'helpCtrl'
  })

  .state('help2', {
    url: '/sympton/gelp',
    templateUrl: 'templates/help2.html',
    controller: 'help2Ctrl'
  })

  .state('tabsController.sympton', {
    url: '/sympton/add',
    views: {
      'tab3': {
        templateUrl: 'templates/sympton.html',
        controller: 'symptonCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')

  

});