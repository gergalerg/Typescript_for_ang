var passcode = 'secret';

var Employee = (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this.__fullName;
        },
        set: function (newName) {
            if (passcode && passcode === "secret") {
                this.__fullName = newName;
            }
            else
                console.log("Error");
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var emp = new Employee();
emp.fullName = "Bob Smith";
console.log(emp.fullName);
