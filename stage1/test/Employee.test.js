const Employee = require("../lib/Employee");

test("can instantiate Employee instnce", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("can set id via consstructor argument", () => {
    const testValue = 100;
    const e = new Employee("foo", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Alice";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("can get id via getId()", () => {
    const testValue = 100;
});