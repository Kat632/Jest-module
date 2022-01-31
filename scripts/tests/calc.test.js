const { TestWatcher } = require("jest");
const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {

    });

    describe("Addition function", () => {
        test("Should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        })
    });

    describe("Addition function", () => {
        test("Should return 73 for 31 + 42", () => {
            expect(addition(31, 42)).toBe(73);
        })
    });
    
    describe("Subtraction function", () => {

    });
    
    describe("Multiply function", () => {

    });
    
    describe("Divide function", () => {

    });
    
})