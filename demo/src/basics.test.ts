import react from "react";
import { GQLHelpers } from "./autogen/hasura/ts";
import { apolloClient } from "./apollo-client";

/*
 *
 */
test("cache.test - init", () => {
  expect(true).toBe(true);
});

/*
 *
 */
test("cache.test - basic query", async done => {
  const { vehicle } = await GQLHelpers.Fragments.Vehicle.queryById({ apolloClient, vehicleId: "316d8f40-487f-4cf4-b7e1-439fd3cb3ae8" });

  expect(vehicle).toBeDefined();
  expect(vehicle?.name).toBe("316d8f40-487f-4cf4-b7e1-439fd3cb3ae8");
  expect(vehicle?.locations).toBeDefined();
  expect(vehicle?.locations.length).toBeGreaterThanOrEqual(1);

  done();
});

test("cache.test - changing a cache value", async done => {
  const vehicleId = "316d8f40-487f-4cf4-b7e1-439fd3cb3ae8";
  const originalVehicleName = "316d8f40-487f-4cf4-b7e1-439fd3cb3ae8";
  const newVehicleName = "newName";

  // fetch
  const { vehicle } = await GQLHelpers.Fragments.Vehicle.queryById({ apolloClient, vehicleId });

  expect(vehicle).toBeDefined();
  expect(vehicle?.name).toBe(originalVehicleName);
  expect(vehicle?.locations).toBeDefined();
  expect(vehicle?.locations.length).toBeGreaterThanOrEqual(1);

  // fetch vehicle from cache
  const vehicleFetchedFromCache = GQLHelpers.Fragments.Vehicle.clientReadFragmentById({ apolloClient, vehicleId });

  // change a value in cache
  const updatedVehicle = { ...vehicle, name: newVehicleName };
  GQLHelpers.Fragments.Vehicle.cacheWriteFragmentById({ apolloClient, vehicleId, vehiclePartial: updatedVehicle });

  // refetch from cache
  const refetchedVehicle = GQLHelpers.Fragments.Vehicle.clientReadFragmentById({ apolloClient, vehicleId });

  // expect name to be updated in entity fetched AFTER update
  expect(refetchedVehicle).toBeDefined();
  expect(refetchedVehicle?.name).toBe(newVehicleName);
  // expect original objects fetched before update not to be updated
  expect(vehicle?.name).toBe(originalVehicleName);
  expect(vehicleFetchedFromCache?.name).toBe(originalVehicleName);

  done();
});
