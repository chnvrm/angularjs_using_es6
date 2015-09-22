class HomeController {
    constructor(notifications) {
        this.notifications = notifications;
    }
}
HomeController.$inject = ['notifications'];
export default HomeController;