define(['exports', 'module'], function (exports, module) {
  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var moduleName = 'bookShelf.directives';

  var Notifications = (function () {
    function Notifications() {
      _classCallCheck(this, Notifications);

      this.restrict = 'E';
      this.templateUrl = 'scripts/directives/templates/notifications.html';
      this.scope = {
        data: '='
      };
    }

    _createClass(Notifications, [{
      key: 'link',
      value: function link(scope, elem, attrs) {
        console.log(scope.data);
      }
    }], [{
      key: 'directiveFactory',
      value: function directiveFactory() {
        var instance = new Notifications();
        return instance;
      }
    }]);

    return Notifications;
  })();

  angular.module("directives", []).directive('notifications', Notifications.directiveFactory);

  module.exports = "directives";
});