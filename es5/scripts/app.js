define(['exports', 'services/productService', 'controllers/controllers', 'directives/notificationsDirective'], function (exports, _servicesProductService, _controllersControllers, _directivesNotificationsDirective) {
    'use strict';

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _services = _interopRequireDefault(_servicesProductService);

    var _controllers = _interopRequireDefault(_controllersControllers);

    var _directives = _interopRequireDefault(_directivesNotificationsDirective);

    var app = angular.module('es6App', ['ui.router', _services['default'], _controllers['default'], _directives['default']]);
    var config = function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl',
            resolve: {
                notifications: ['productService', function (productService) {
                    return productService.getNotifications();;
                }]
            }
        }).state('products', {
            url: '/products',
            templateUrl: 'views/products.html',
            controller: 'productController',
            controllerAs: 'productCtrl',
            resolve: {
                products: ['productService', function (productService) {
                    return productService.getProducts();
                }]
            }
        });
        $urlRouterProvider.otherwise('/');
    };
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    app.config(config);
    angular.bootstrap(document, ['es6App']);
});