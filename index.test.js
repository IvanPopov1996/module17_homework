import { getMonth } from './index.js';

describe("tests for revertString function", () => {
  it("should name month", () => expect(getMonth(2)).toBe("февраль"));
});

describe("tests for revertString function", () => {
  it("should name month", () => expect(getMonth(0)).toBe("неизвестно"));
});

describe("tests for revertString function", () => {
  it("should name month", () => expect(getMonth(" ")).toBe("неизвестно"));
});