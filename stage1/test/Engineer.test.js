const Engineer = require("../lib/Engineer");



test("Can check via Engineer", () => {
    const github = "dmclenan";
    const e = new Engineer("foo", 1, "test@test.com", github);
    expect(e.github).toBe(github);
});

test("Can get name via getRole()", () => {
    const testValue = "Engineer";
    const e = new Engineer("joe", "17", "dmclenan@dm.com", "Dmclenan");
    expect(e.getRole()).toBe(testValue);
});

test("Can get name via getOfficeNumber()", () => {
    const testValue = "dmclenan";
    const e = new Engineer("joe", "17", "dmclenan@dm.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});