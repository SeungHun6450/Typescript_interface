"use strict";
function hello3(person) {
    console.log("\uC548\uB155\uD558\uC138\uC694! " + person.name + " \uC785\uB2C8\uB2E4.");
}
var p31 = {
    name: "Mark",
    age: 39,
};
var p32 = {
    name: "Anna",
    systers: ["Sung", "Chan"],
};
var p33 = {
    name: "BokBok",
    father: p31,
    mother: p32,
};
console.log(hello3(p31));
console.log(hello3(p32));
console.log(hello3(p33));
