"use strict";
var Person = /** @class */ (function () {
    //name의 초기값을 지정해줘야 빨간줄이 안뜬다
    function Person(name) {
        this.name = name;
    }
    Person.prototype.hello = function () {
        console.log("\uC548\uB155\uD558\uC138\uC694! " + this.name + " \uC785\uB2C8\uB2E4.");
    };
    return Person;
}());
var person = new Person("Mark");
person.hello();
