//const { add, subtract, multiply, devide } = require("./math");
import { add, subtract, multiply, devide } from "./math.js";

describe("Math.js test", () => {
  it("should test add", () => {
    expect(add(2, 2)).toBe(4);
  });
  it("should test subtract", () => {
    expect(subtract(2, 2)).toBe(0);
  });
  it("should test multiply", () => {
    expect(multiply(2, 2)).toBe(4);
  });
  it("should test devide", () => {
    expect(devide(2, 2)).toBe(1);
  });
});
