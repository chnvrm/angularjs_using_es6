import services from 'services/productService';
import controllers from 'controllers/controllers';
import directives from 'directives/notificationsDirective';
var app = angular.module('es6App', ['ui.router', services, controllers, directives]);
var config = function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'homeController',
        controllerAs: 'homeCtrl',
        resolve: {
            notifications: ['productService', function (productService) {
                return  productService.getNotifications();;
            }]
        }
    })
    .state('products', {
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