const Engineer = require("../lib/Engineer");

test("Creates a new Engineer object", () => {
    
    const engineer = new Engineer("Dave", "10", "dave@aol.com", "infinitelooping");

    expect(engineer.name).toBe("Dave");
    expect(engineer.id).toBe("10");
    expect(engineer.email).toBe("dave@aol.com");
    expect(engineer.github).toBe("infinitelooping");
});

test("Creates a new Engineer object, with missing parameter", () => {
    
    const engineer = new Engineer("Dave", "", "dave@aol.com", "infinitelooping");

    expect(engineer.name).toBe("Dave");
    expect(engineer.id).toBeFalsy();
    expect(engineer.email).toBe("dave@aol.com");
    expect(engineer.github).toBe("infinitelooping");
});