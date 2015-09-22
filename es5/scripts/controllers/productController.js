define(['exports', 'module'], function (exports, module) {
    'use strict';

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var ProductSERVICE = new WeakMap();

    var ProductController = (function () {
        function ProductController(products, productService) {
            _classCallCheck(this, ProductController);

            ProductSERVICE.set(this, productService);
            this.products = products;
        }

        _createClass(ProductController, [{
            key: 'removeProduct',
            value: function removeProduct(index) {
                var msg = this.products[index].id + " is removed from the products list";
                ProductSERVICE.get(this).pushNotification(msg);
                this.products.splice(index, 1);
                ProductSERVICE.get(this).setProducts(this.products);
            }
        }]);

        return ProductController;
    })();

    ProductController.$inject = ['products', 'productService'];
    module.exports = ProductController;
});