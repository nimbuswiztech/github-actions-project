const test = require("node:test");
const assert = require("node:assert/strict");
const { getGreeting } = require("../src/index");

test("returns the default greeting", () => {
  assert.equal(
    getGreeting(),
    "Hello, World! Welcome to GitHub Actions."
  );
});

test("includes the supplied name", () => {
  assert.equal(
    getGreeting("Students"),
    "Hello, Students! Welcome to GitHub Actions."
  );
});
