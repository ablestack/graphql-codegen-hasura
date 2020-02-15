import { convertInsertInputToPartialFragmentResursive } from ".";

/*
 *
 */
test("convertInsertInputToPartialFragmentResursive - refType object should return as expected", () => {
  const foo = { id: 1, bar: { id: 2, name: "foo bar" } };

  const fragment = convertInsertInputToPartialFragmentResursive({ insertInputType: foo, refTypeMap: { bar: "Bar" } });

  console.log(" --> fragment 1 ", fragment);

  expect(fragment).toMatchObject({ id: 1, bar: { id: 2, name: "foo bar", __typename: "Bar" } });
});

/*
 *
 */
test("convertInsertInputToPartialFragmentResursive - refType array should return as expected", () => {
  const foo = { id: 1, bar: [{ id: 2 }, { id: 3 }] };

  const fragment = convertInsertInputToPartialFragmentResursive({ insertInputType: foo, refTypeMap: { bar: "Bar" } });

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
test("convertInsertInputToPartialFragmentResursive - insertInput object should return as expected", () => {
  const foo = { id: 1, bar: { data: { id: 2 } } };

  const fragment = convertInsertInputToPartialFragmentResursive({ insertInputType: foo, refTypeMap: { bar: "Bar" } });

  console.log(" --> fragment 3", fragment);

  expect(fragment).toMatchObject({ id: 1, bar: { id: 2, __typename: "Bar" } });
});

/*
 *
 */
test("convertInsertInputToPartialFragmentResursive - insertInput array should return as expected", () => {
  const foo = { id: 1, bar: { data: [{ id: 2 }, { id: 3 }] } };

  const fragment = convertInsertInputToPartialFragmentResursive({ insertInputType: foo, refTypeMap: { bar: "Bar" } });

  console.log(" --> fragment 4", fragment);

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
test("convertInsertInputToPartialFragmentResursive - insertInput recursive array should return as expected", () => {
  const foo = {
    id: 1,
    bar: {
      data: [
        { id: 2, name: "foo bar 2" },
        { id: 3, name: "foo bar 3", baz: { data: [{ id: 4, name: "foo bar baz 4" }] } }
      ]
    }
  };

  const fragmentRecursive = convertInsertInputToPartialFragmentResursive({ insertInputType: foo, refTypeMap: { bar: "Bar", baz: "Baz" } });
  console.log(" --> fragment 5", JSON.stringify(fragmentRecursive, null, 2));

  expect(fragmentRecursive).toMatchObject({
    id: 1,
    bar: [
      { id: 2, __typename: "Bar" },
      { id: 3, __typename: "Bar", baz: [{ id: 4, name: "foo bar baz 4", __typename: "Baz" }] }
    ]
  });
});

test("convertInsertInputToPartialFragmentResursive - insertInput recursive (deeper definition missing) should return as expected", () => {
  const foo = {
    id: 1,
    bar: {
      data: [
        { id: 2, name: "foo bar 2" },
        { id: 3, name: "foo bar 3", baz: { data: [{ id: 4, name: "foo bar baz 4" }] } }
      ]
    }
  };

  const fragmentRecursive = convertInsertInputToPartialFragmentResursive({ insertInputType: foo, refTypeMap: { bar: "Bar" } });
  console.log(" --> fragment 5", JSON.stringify(fragmentRecursive, null, 2));

  expect(fragmentRecursive).toMatchObject({
    id: 1,
    bar: [
      { id: 2, __typename: "Bar" },
      { id: 3, __typename: "Bar" }
    ]
  });
  expect(fragmentRecursive.bar[1].baz).toBeUndefined();
});
