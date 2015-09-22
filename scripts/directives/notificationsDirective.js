var moduleName='bookShelf.directives';

class Notifications {
  constructor() {
    this.restrict = 'E';
    this.templateUrl = 'scripts/directives/templates/notifications.html';
    this.scope = {
    	data: '='
    }
  }
  link(scope, elem, attrs){
    console.log(scope.data);
  }
  static directiveFactory(){
    let instance = new Notifications();
    return instance;
  }
}
angular.module("directives", [])
  .directive('notifications', Notifications.directiveFactory);

export default "directives";
