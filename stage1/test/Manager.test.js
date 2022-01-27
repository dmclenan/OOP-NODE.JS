const Manager = require("../lib/Manager");



test("Can set email via constructor argument", () => {
    const officeNumber = "309";
    const e = new Manager("foo", 1, "test@test.com", officeNumber);
    expect(e.officeNumber).toBe(officeNumber);
});

test("Can get name via getRole()", () => {
    const testValue = "Manager";
    const e = new Manager("joe", "17", "dmclenan@dm.com", "officeNumber");
    expect(e.getRole()).toBe(testValue);
});

test("Can get name via getOfficeNumber()", () => {
    const testValue = "309";
    const e = new Manager("joe", "17", "dmclenan@dm.com", testValue);
    expect(e.getofficeNumber()).toBe(testValue);
});