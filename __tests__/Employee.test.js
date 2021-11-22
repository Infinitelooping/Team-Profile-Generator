const Employee = require("../lib/Employee");

test("Creates a new Employee object", () => {
    
    const employee = new Employee("Dave", "10", "dave@aol.com");

    expect(employee.name).toBe("Dave");
    expect(employee.id).toBe("10");
    expect(employee.email).toBe("dave@aol.com");
});

test("Creates a new Employee object, with missing parameter", () => {
    
    const employee = new Employee("Dave", "", "dave@aol.com");

    expect(employee.name).toBe("Dave");
    expect(employee.id).toBeFalsy();
    expect(employee.email).toBe("dave@aol.com");
});