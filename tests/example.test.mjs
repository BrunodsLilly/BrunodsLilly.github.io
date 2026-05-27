import { test } from "node:test";
import assert from "node:assert/strict";

// Example: pure math — replace with real lib imports as you build them
// e.g. import { Vec2 } from "../web/lib/Vec2.mjs";

test("addition is commutative", () => {
  assert.equal(1 + 2, 2 + 1);
});

test("floating point: within epsilon", () => {
  const epsilon = 1e-10;
  const a = 0.1 + 0.2;
  const b = 0.3;
  assert.ok(Math.abs(a - b) < epsilon, `expected ${a} ≈ ${b}`);
});
