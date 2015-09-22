define(['exports', 'module', './homeController', './productController'], function (exports, module, _homeController, _productController) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _HomeController = _interopRequireDefault(_homeController);

  var _ProductController = _interopRequireDefault(_productController);

  var app = angular.module('controllers', []);
  app.controller('homeController', _HomeController['default']);
  app.controller('productController', _ProductController['default']);
  module.exports = 'controllers';
});