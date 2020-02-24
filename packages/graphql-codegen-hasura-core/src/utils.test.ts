import { convertInsertInputToPartialFragmentResursive } from ".";

/*
 *
 */
test("convertInsertInputToPartialFragmentResursive - refType object should return as expected", () => {
  const foo = { id: 1, bar: { id: 2, name: "foo bar" } };

  const fragment = convertInsertInputToPartialFragmentResursive({ insertInputType: foo, fieldMap: { bar: "Bar" } });

  console.log(" --> fragment 1 ", fragment);

  expect(fragment).toMatchObject({ id: 1, bar: { id: 2, name: "foo bar", __typename: "Bar" } });
});

/*
 *
 */
test("convertInsertInputToPartialFragmentResursive - plain array should return as expected (no typename)", () => {
  const foo = { id: 1, bar: [{ id: 2 }, { id: 3 }] };

  const fragment = convertInsertInputToPartialFragmentResursive({ insertInputType: foo });

  console.log(" --> fragment 2.0", fragment);

  expect(fragment).toMatchObject({
    id: 1,
    bar: [{ id: 2 }, { id: 3 }]
  });
  expect(fragment.bar[0]._typename).toBeUndefined();
});

/*
 *
 */
test("convertInsertInputToPartialFragmentResursive - plain array should return as expected (with typename)", () => {
  const foo = { id: 1, bar: [{ id: 2 }, { id: 3 }] };

  const fragment = convertInsertInputToPartialFragmentResursive({ insertInputType: foo, fieldMap: { bar: "Bar" } });

  console.log(" --> fragment 2.1", fragment);

  expect(fragment).toMatchObject({
    id: 1,
    bar: [
      { id: 2, __typename: "Bar" },
      { id: 3, __typename: "Bar" }
    ]
  });
});

test("convertInsertInputToPartialFragmentResursive - plain array should be omitted", () => {
  const foo = { id: 1, bar: [{ id: 2 }, { id: 3 }] };

  const fragment = convertInsertInputToPartialFragmentResursive({ insertInputType: foo, fieldMap: { bar: "IGNORE_FIELD" } });

  console.log(" --> fragment 2.2", fragment);

  expect(fragment).toMatchObject({ id: 1 });
  expect(fragment.bar).toBeUndefined();
});

/*
 *
 */
test("convertInsertInputToPartialFragmentResursive - insertInput object should return as expected", () => {
  const foo = { id: 1, bar: { data: { id: 2 } } };

  const fragment = convertInsertInputToPartialFragmentResursive({ insertInputType: foo, fieldMap: { bar: "Bar" } });

  console.log(" --> fragment 3", fragment);

  expect(fragment).toMatchObject({ id: 1, bar: { id: 2, __typename: "Bar" } });
});

/*
 *
 */
test("convertInsertInputToPartialFragmentResursive - insertInput array should return as expected", () => {
  const foo = { id: 1, bar: { data: [{ id: 2 }, { id: 3 }] } };

  const fragment = convertInsertInputToPartialFragmentResursive({ insertInputType: foo, fieldMap: { bar: "Bar" } });

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

  const expected = {
    id: 1,
    bar: [
      { id: 2, name: "foo bar 2", __typename: "Bar" },
      { id: 3, name: "foo bar 3", __typename: "Bar", baz: [{ id: 4, name: "foo bar baz 4", __typename: "Baz" }] }
    ]
  };

  const fragmentRecursive = convertInsertInputToPartialFragmentResursive({ insertInputType: foo, fieldMap: { bar: "Bar", baz: "Baz" } });

  expect(fragmentRecursive).toMatchObject(expected);
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

  const expected = {
    id: 1,
    bar: [
      { id: 2, name: "foo bar 2", __typename: "Bar" },
      { id: 3, name: "foo bar 3", __typename: "Bar" }
    ]
  };

  const fragmentRecursive = convertInsertInputToPartialFragmentResursive({ insertInputType: foo, fieldMap: { bar: "Bar" } });

  expect(fragmentRecursive).toMatchObject(expected);
  expect(fragmentRecursive.bar[1].baz).toBeUndefined();
});
