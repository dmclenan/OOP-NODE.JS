const Intern = require("../lib/Intern");



test("Can check school", () => {
    const school = "bears";
    const e = new Intern("foo", 1, "test@test.com", school);
    expect(e.school).toBe(school);
});

test("Can get name via getRole()", () => {
    const testValue = "intern";
    const e = new Intern("joe", "17", "dmclenan@dm.com", "school");
    expect(e.getRole()).toBe(testValue);
});

test("Can get name via getOfficeNumber()", () => {
    const testValue = "school";
    const e = new Intern("joe", "17", "dmclenan@dm.com", testValue);
    expect(e.getschool()).toBe(testValue);
});