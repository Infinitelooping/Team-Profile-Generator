// const { expect } = require("@jest/globals");
// const { test } = require("picomatch");
const Manager = require("../lib/Manager");

test("Creates a new Manager object", () => {
    
    const manager = new Manager("Dave", "10", "dave@aol.com", "B90A");

    expect(manager.name).toBe("Dave");
    expect(manager.id).toBe("10");
    expect(manager.email).toBe("dave@aol.com");
    expect(manager.officeNumber).toBe("B90A");
});

test("Creates a new Manager object, with missing parameter", () => {
    
    const manager = new Manager("Dave", "", "dave@aol.com", "B90A");

    expect(manager.name).toBe("Dave");
    expect(manager.id).toBeFalsy();
    expect(manager.email).toBe("dave@aol.com");
    expect(manager.officeNumber).toBe("B90A");
});