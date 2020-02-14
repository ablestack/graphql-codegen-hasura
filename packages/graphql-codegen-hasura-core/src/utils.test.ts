import { convertInsertInputToShallowPartialFragment } from ".";

test("convertInsertInputToShallowPartialFragment should return as expected", done => {
  const foo = { id: 1, bar: { data: { id: 2 } } };

  const fragment = convertInsertInputToShallowPartialFragment({ insertInputType: foo, refTypeMap: { bar: "Bar" } });

  expect(fragment).toMatchObject({ id: 1, bar: { id: 2, __typename: "Dog" } });
});
