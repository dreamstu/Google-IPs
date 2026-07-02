import assert from "node:assert/strict";
import { createRequire } from "node:module";
import test from "node:test";

const requirePackage = createRequire(__filename);

test("resolves package exports", () => {
  const googleIps = requirePackage("google-ips") as typeof import("../src");
  const data = requirePackage("google-ips/data") as typeof import("../data/google-ips.json");

  assert.equal(googleIps.ips.length, 4312);
  assert.equal(data.ips.length, googleIps.ips.length);
  assert.equal(googleIps.findCountry("118.174.25.251"), "Thailand");
});
