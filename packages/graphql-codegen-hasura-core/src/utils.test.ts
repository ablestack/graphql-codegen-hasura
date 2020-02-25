import { convertInsertInputToPartialFragmentResursive } from ".";

/*
 *
 */
test("convertInsertInputToPartialFragmentResursive - refType object should return as expected", () => {
  const foo = { id: 1, bar: { id: 2, name: "foo bar" } };

  const fragment = convertInsertInputToPartialFragmentResursive({ insertInput: foo, fieldMap: { bar: "Bar" } });

  console.log(" --> fragment 1 ", fragment);

  expect(fragment).toMatchObject({ id: 1, bar: { id: 2, name: "foo bar", __typename: "Bar" } });
});

/*
 *
 */
test("convertInsertInputToPartialFragmentResursive - plain array should return as expected (no typename)", () => {
  const foo = { id: 1, bar: [{ id: 2 }, { id: 3 }] };

  const fragment = convertInsertInputToPartialFragmentResursive({ insertInput: foo });

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

  const fragment = convertInsertInputToPartialFragmentResursive({ insertInput: foo, fieldMap: { bar: "Bar" } });

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

  const fragment = convertInsertInputToPartialFragmentResursive({ insertInput: foo, fieldMap: { bar: "IGNORE_FIELD" } });

  console.log(" --> fragment 2.2", fragment);

  expect(fragment).toMatchObject({ id: 1 });
  expect(fragment.bar).toBeUndefined();
});

/*
 *
 */
test("convertInsertInputToPartialFragmentResursive - insertInput object should return as expected", () => {
  const foo = { id: 1, bar: { data: { id: 2 } } };

  const fragment = convertInsertInputToPartialFragmentResursive({ insertInput: foo, fieldMap: { bar: "Bar" } });

  console.log(" --> fragment 3", fragment);

  expect(fragment).toMatchObject({ id: 1, bar: { id: 2, __typename: "Bar" } });
});

/*
 *
 */
test("convertInsertInputToPartialFragmentResursive - insertInput array should return as expected", () => {
  const foo = { id: 1, bar: { data: [{ id: 2 }, { id: 3 }] } };

  const fragment = convertInsertInputToPartialFragmentResursive({ insertInput: foo, fieldMap: { bar: "Bar" } });

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

  const fragmentRecursive = convertInsertInputToPartialFragmentResursive({ insertInput: foo, fieldMap: { bar: "Bar", baz: "Baz" } });

  expect(fragmentRecursive).toMatchObject(expected);
});

test("convertInsertInputToPartialFragmentResursive - insertInput recursive (deeper definition copied as-is) should return as expected", () => {
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

  const fragmentRecursive = convertInsertInputToPartialFragmentResursive({ insertInput: foo, fieldMap: { bar: "Bar" } });

  expect(fragmentRecursive).toMatchObject(expected);
  expect(fragmentRecursive.bar[1].baz).toBeDefined();
  expect(fragmentRecursive.bar[1].baz.__typename).toBeUndefined();
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

  const fragmentRecursive = convertInsertInputToPartialFragmentResursive({ insertInput: foo, fieldMap: { bar: "Bar", baz: "IGNORE_FIELD" } });

  expect(fragmentRecursive).toMatchObject(expected);
  expect(fragmentRecursive.bar[1].baz).toBeUndefined();
});

test("convertInsertInputToPartialFragmentResursive - deep nested realworld example", () => {
  const realWorldExample = {
    id: "00000000-0000-0000-0000-00000000",
    title: "Title",
    type: "Type",
    nested1: {
      data: [
        {
          id: "10000000-0000-0000-0000-00000000",
          title: "Title",
          type: "Type",
          nested2: {
            data: {
              id: "20000000-0000-0000-0000-00000000",
              nested3A: {
                data: {
                  id: "30000000-0000-0000-0000-00000000",
                  nested4: {
                    data: [
                      {
                        id: "40000000-0000-0000-0000-00000000",
                        title: "Test",
                        index: 0
                      }
                    ]
                  }
                }
              },
              nested3B: {
                data: {
                  id: "50000000-0000-0000-0000-00000000",
                  nested4: {
                    data: [
                      {
                        id: "60000000-0000-0000-0000-00000000",
                        title: "Test",
                        index: 0
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      ]
    },
    related_id: "70000000-0000-0000-0000-00000000",
    relatedObject: {
      data: {
        id: "80000000-0000-0000-0000-00000000"
      }
    }
  };

  const expected = {
    id: "00000000-0000-0000-0000-00000000",
    title: "Title",
    type: "Type",
    nested1: [
      {
        __typename: "nested1",
        id: "10000000-0000-0000-0000-00000000",
        title: "Title",
        type: "Type",
        nested2: {
          __typename: "nested2",
          id: "20000000-0000-0000-0000-00000000",
          nested3A: {
            __typename: "nested3",
            id: "30000000-0000-0000-0000-00000000",
            nested4: [
              {
                __typename: "nested4",
                id: "40000000-0000-0000-0000-00000000",
                title: "Test",
                index: 0
              }
            ]
          },
          nested3B: {
            __typename: "nested3",
            id: "50000000-0000-0000-0000-00000000",
            nested4: [
              {
                __typename: "nested4",
                id: "60000000-0000-0000-0000-00000000",
                title: "Test",
                index: 0
              }
            ]
          }
        }
      }
    ],
    related_id: "70000000-0000-0000-0000-00000000",
    relatedObject: {
      __typename: "relatedObject",
      id: "80000000-0000-0000-0000-00000000"
    }
  };

  const fragmentRecursive = convertInsertInputToPartialFragmentResursive({
    insertInput: realWorldExample,
    fieldMap: { nested1: "nested1", nested2: "nested2", nested3A: "nested3", nested3B: "nested3", nested4: "nested4", relatedObject: "relatedObject" }
  });

  expect(fragmentRecursive).toMatchObject(expected);
});
