define(['exports', 'module'], function (exports, module) {
    'use strict';

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var $HTTP = new WeakMap();
    var $Q = new WeakMap();
    var $TIMEOUT = new WeakMap();

    var ProductService = (function () {
        function ProductService($http, $q, $timeout) {
            _classCallCheck(this, ProductService);

            $HTTP.set(this, $http);
            $Q.set(this, $q);
            $TIMEOUT.set(this, $timeout);
            this.notifications = [];
            this.products = undefined;
        }

        _createClass(ProductService, [{
            key: 'getNotifications',
            value: function getNotifications() {
                return this.notifications;
            }
        }, {
            key: 'pushNotification',
            value: function pushNotification(notification) {
                this.notifications.push(notification);
            }
        }, {
            key: 'getProducts',
            value: function getProducts() {
                var _this = this;

                var defered = $Q.get(this).defer();
                if (this.products === undefined) {
                    $HTTP.get(this).get('model/products.json').then(function (response) {
                        _this.products = response.data;
                        defered.resolve(_this.products);
                    })['catch'](function (error) {
                        defered.reject(error);
                    });
                } else {
                    $TIMEOUT.get(this)(function () {
                        defered.resolve(_this.products);
                    });
                }
                return defered.promise;
            }
        }, {
            key: 'setProducts',
            value: function setProducts(products) {
                this.products = products;
            }
        }]);

        return ProductService;
    })();

    ProductService.$inject = ['$http', '$q', '$timeout'];
    var app = angular.module('services', []);
    app.service("productService", ProductService);
    module.exports = 'services';
});