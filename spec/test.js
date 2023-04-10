// // var mocha = require('mocha')
// // var describe = mocha.describe
// // var it = mocha.it
// // var assert = require('chai').assert
// const chai = require('chai');
// //const assert = chai.assert;
// const assert = require('assert');
// const myCode = require('../spec/test.js');
// describe("Sample tests",function() {
  
//   it("2 is even", () => {
//     assert.strictEqual(evenOrOdd(2), "Even");
//   });
//   it("7 is odd", () => {
//     assert.strictEqual(evenOrOdd(7), "Odd");
//   });
//   it("-42 is even", () => {
//     assert.strictEqual(evenOrOdd(-42), "Even");
//   });
//   it("-7 is odd", () => {
//     assert.strictEqual(evenOrOdd(-7), "Odd");
//   });
//   it("0 is even", () => {
//     assert.strictEqual(evenOrOdd(0), "Even");
//   });
// });
const chai = require('chai');
const assert = chai.assert;
const evenOrOdd = require('./EvenOrOdd.js');
// function evenOrOdd(number) {
//   if(number % 2 == 0)
//   return "Even";
//   else
//   return "Odd";
// }

describe("Sample tests",() => {
  
  it("2 is even", () => {
    assert.strictEqual(evenOrOdd(2), "Even");
  });
  it("7 is odd", () => {
    assert.strictEqual(evenOrOdd(7), "Odd");
  });
  it("-42 is even", () => {
    assert.strictEqual(evenOrOdd(-42), "Even");
  });
  it("-7 is odd", () => {
    assert.strictEqual(evenOrOdd(-7), "Odd");
  });
  it("0 is even", () => {
    assert.strictEqual(evenOrOdd(0), "Even");
  });
});
