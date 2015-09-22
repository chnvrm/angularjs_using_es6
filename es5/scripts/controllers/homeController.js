define(['exports', 'module'], function (exports, module) {
    'use strict';

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var HomeController = function HomeController(notifications) {
        _classCallCheck(this, HomeController);

        this.notifications = notifications;
    };

    HomeController.$inject = ['notifications'];
    module.exports = HomeController;
});