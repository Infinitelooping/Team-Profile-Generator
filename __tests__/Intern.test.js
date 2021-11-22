const Intern = require("../lib/Intern");

test("Creates a new Intern object", () => {
    
    const intern = new Intern("Dave", "10", "dave@aol.com", "U of U");

    expect(intern.name).toBe("Dave");
    expect(intern.id).toBe("10");
    expect(intern.email).toBe("dave@aol.com");
    expect(intern.school).toBe("U of U");
});

test("Creates a new Intern object, with missing parameter", () => {
    
    const intern = new Intern("Dave", "", "dave@aol.com", "U of U");

    expect(intern.name).toBe("Dave");
    expect(intern.id).toBeFalsy();
    expect(intern.email).toBe("dave@aol.com");
    expect(intern.school).toBe("U of U");
});