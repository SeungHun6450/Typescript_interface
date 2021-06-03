"use strict";
// 함수는 구현체와의 관계 보다는 위의 인터페이스와의 관계만 중요하게 작용한다
// const helloPerson: HelloPerson = function(name:string, age:number){  // 에러
var helloPerson = function (name) {
    console.log("\uC548\uB155\uD558\uC138\uC694! " + name + " \uC785\uB2C8\uB2E4.");
};
helloPerson('Mark', 34);
