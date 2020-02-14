import { convertInsertInputToShallowPartialFragment } from ".";

/*
 *
 */
test("convertInsertInputToShallowPartialFragment - refType object should return as expected", () => {
  const foo = { id: 1, bar: { id: 2 } };

  const fragment = convertInsertInputToShallowPartialFragment({ insertInputType: foo, refTypeMap: { bar: "Bar" } });

  console.log(" --> fragment 1 ", fragment);

  expect(fragment).toMatchObject({ id: 1, bar: { id: 2, __typename: "Bar" } });
});

/*
 *
 */
test("convertInsertInputToShallowPartialFragment - refType array should return as expected", () => {
  const foo = { id: 1, bar: [{ id: 2 }, { id: 3 }] };

  const fragment = convertInsertInputToShallowPartialFragment({ insertInputType: foo, refTypeMap: { bar: "Bar" } });

  console.log(" --> fragment 2", fragment);

  expect(fragment).toMatchObject({
    id: 1,
    bar: [
      { id: 2, __typename: "Bar" },
      { id: 3, __typename: "Bar" }
    ]
  });
});

/*
 *
 */
test("convertInsertInputToShallowPartialFragment - insertInput object should return as expected", () => {
  const foo = { id: 1, bar: { data: { id: 2 } } };

  const fragment = convertInsertInputToShallowPartialFragment({ insertInputType: foo, refTypeMap: { bar: "Bar" } });

  console.log(" --> fragment 3", fragment);

  expect(fragment).toMatchObject({ id: 1, bar: { id: 2, __typename: "Bar" } });
});

/*
 *
 */
test("convertInsertInputToShallowPartialFragment - insertInput array should return as expected", () => {
  const foo = { id: 1, bar: { data: [{ id: 2 }, { id: 3 }] } };

  const fragment = convertInsertInputToShallowPartialFragment({ insertInputType: foo, refTypeMap: { bar: "Bar" } });

  console.log(" --> fragment 4", fragment);

  expect(fragment).toMatchObject({
    id: 1,
    bar: [
      { id: 2, __typename: "Bar" },
      { id: 3, __typename: "Bar" }
    ]
  });
});
