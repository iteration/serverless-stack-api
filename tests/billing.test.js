import { calculateCost } from "../libs/billing-lib";
//We are adding 3 tests. They are testing the different tiers of our pricing structure.
//We test the case where a user is trying to store 10, 100, and 101 notes.
//And comparing the calculated cost to the one we are expecting.
//You can read more about using Jest in the Jest docs https://facebook.github.io/jest/docs/en/getting-started.html.

test("Lowest tier", () => {
  const storage = 10;

  const cost = 4000;
  const expectedCost = calculateCost(storage);

  expect(cost).toEqual(expectedCost);
});

test("Middle tier", () => {
  const storage = 100;

  const cost = 20000;
  const expectedCost = calculateCost(storage);

  expect(cost).toEqual(expectedCost);
});

test("Highest tier", () => {
  const storage = 101;

  const cost = 10100;
  const expectedCost = calculateCost(storage);

  expect(cost).toEqual(expectedCost);
});