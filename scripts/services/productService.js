const $HTTP = new WeakMap();
const $Q = new WeakMap();
const $TIMEOUT = new WeakMap();
class ProductService {
    constructor($http, $q, $timeout) {
        $HTTP.set(this, $http);
        $Q.set(this, $q);
        $TIMEOUT.set(this, $timeout);
        this.notifications = [];
        this.products = undefined;
    }
    getNotifications () {
       return this.notifications;
    }
    pushNotification (notification) {
     this.notifications.push(notification);
    }
    getProducts () {
       var defered = $Q.get(this).defer();
       if(this.products === undefined) {
           $HTTP.get(this).get('model/products.json').then((response) => {
               this.products = response.data;
               defered.resolve(this.products);
           }).catch((error) => {
               defered.reject(error);
           });
       } else {
           $TIMEOUT.get(this)(() => {
               defered.resolve(this.products);
           });
       }
       return defered.promise;
    }
    setProducts (products) {
        this.products = products;
    };
}
ProductService.$inject = ['$http', '$q', '$timeout'];
var app = angular.module('services', []);
app.service("productService", ProductService);
export default 'services';