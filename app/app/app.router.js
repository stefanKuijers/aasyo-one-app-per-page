// 'use strict';

angular.module(
    'aas.router', 
    [
        'aas.component.home.controller',
        'aas.component.about.controller'
        // 'aas.component.project.controller',
        // 'aas.component.myProfile.controller',
    ]
).config(
    ['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url:                     '/',
                controller:              'HomeController',
                controllerAs:            'homeCtrl',
                templateUrl:             'app/component/home/homeView.html'
            })
            .state('about', {
                url:                     '/about',
                controller:              'AboutController',
                controllerAs:            'aboutCtrl',
                templateUrl:             'app/component/about/aboutView.html'
            })
            // .state('project', {
            //     url:                     '/project/:id',
            //     controller:              'ProjectController',
            //     controllerAs:            'projectCtrl',
            //     templateUrl:             'app/component/project/projectView.html'
            // })
        ;

        $urlRouterProvider.otherwise('/');
    }]
);