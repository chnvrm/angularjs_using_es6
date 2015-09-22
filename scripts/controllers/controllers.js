import HomeController from './homeController';
import ProductController from './productController';
var app = angular.module('controllers', []);
app.controller('homeController', HomeController);
app.controller('productController', ProductController);
export default 'controllers';