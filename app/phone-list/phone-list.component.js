var PhoneListController = (function () {
    function PhoneListController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
    }
    return PhoneListController;
}());
PhoneListController.$inject = ['Phone'];
angular.
    module('phoneList').
    component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
});
//# sourceMappingURL=phone-list.component.js.map