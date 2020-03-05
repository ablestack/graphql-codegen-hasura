import { convertToGraph, stripInsertInputClientFields } from ".";

/*
 *
 */
test("convertToGraph - object should return as expected", () => {
  const foo = { id: 1, bar: { id: 2, name: "foo bar" } };

  const fragment = convertToGraph({ input: foo, fieldMap: { bar: "Bar" } });

  expect(fragment).toMatchObject({ id: 1, bar: { id: 2, name: "foo bar", __typename: "Bar" } });
});

test("convertToGraph - object with root typename should return as expected", () => {
  const foo = { id: 1, bar: { id: 2, name: "foo bar" } };

  const fragment = convertToGraph({ input: foo, fieldMap: { bar: "Bar" }, typename: "Foo" });

  expect(fragment).toMatchObject({ id: 1, __typename: "Foo", bar: { id: 2, name: "foo bar", __typename: "Bar" } });
});

test("convertToGraph - object with client fields should return as expected", () => {
  const foo = { id: 1, ___bar: { id: 2, name: "foo bar" } };

  const fragment = convertToGraph({ input: foo, fieldMap: { bar: "Bar" } });

  expect(fragment).toMatchObject({ id: 1, bar: { id: 2, name: "foo bar", __typename: "Bar" } });
});

/*
 *
 */
test("convertToGraph - plain array should return as expected (no typename)", () => {
  const foo = { id: 1, bar: [{ id: 2 }, { id: 3 }] };

  const fragment = convertToGraph({ input: foo });

  console.log(" ---------> ", fragment);

  expect(fragment).toMatchObject({
    id: 1,
    bar: [{ id: 2 }, { id: 3 }]
  });
  expect(fragment.bar[0]._typename).toBeUndefined();
});

/*
 *
 */
test("convertToGraph - plain array should return as expected (with typename)", () => {
  const foo = { id: 1, bar: [{ id: 2 }, { id: 3 }] };

  const fragment = convertToGraph({ input: foo, fieldMap: { bar: "Bar" } });

  expect(fragment).toMatchObject({
    id: 1,
    bar: [
      { id: 2, __typename: "Bar" },
      { id: 3, __typename: "Bar" }
    ]
  });
});

test("convertToGraph - plain array should be omitted", () => {
  const foo = { id: 1, bar: [{ id: 2 }, { id: 3 }] };

  const fragment = convertToGraph({ input: foo, fieldMap: { bar: "IGNORE_FIELD" } });

  expect(fragment).toMatchObject({ id: 1 });
  expect(fragment.bar).toBeUndefined();
});

/*
 *
 */
test("convertToGraph - insertInput object should return as expected", () => {
  const foo = { id: 1, bar: { data: { id: 2 } } };

  const fragment = convertToGraph({ input: foo, fieldMap: { bar: "Bar" } });

  expect(fragment).toMatchObject({ id: 1, bar: { id: 2, __typename: "Bar" } });
});

/*
 *
 */
test("convertToGraph - insertInput array should return as expected", () => {
  const foo = { id: 1, bar: { data: [{ id: 2 }, { id: 3 }] } };

  const fragment = convertToGraph({ input: foo, fieldMap: { bar: "Bar" } });

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
test("convertToGraph - insertInput recursive array should return as expected", () => {
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

  const fragmentRecursive = convertToGraph({ input: foo, fieldMap: { bar: "Bar", baz: "Baz" } });

  expect(fragmentRecursive).toMatchObject(expected);
});

test("convertToGraph - insertInput recursive (deeper definition copied as-is) should return as expected", () => {
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

  const fragmentRecursive = convertToGraph({ input: foo, fieldMap: { bar: "Bar" } });

  expect(fragmentRecursive).toMatchObject(expected);
  expect(fragmentRecursive.bar[1].baz).toBeDefined();
  expect(fragmentRecursive.bar[1].baz.__typename).toBeUndefined();
});

test("convertToGraph - insertInput recursive (deeper definition missing) should return as expected", () => {
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

  const fragmentRecursive = convertToGraph({ input: foo, fieldMap: { bar: "Bar", baz: "IGNORE_FIELD" } });

  expect(fragmentRecursive).toMatchObject(expected);
  expect(fragmentRecursive.bar[1].baz).toBeUndefined();
});

test("convertToGraph - deep nested realworld example", () => {
  const realWorldExample = {
    id: "00000000-0000-0000-0000-00000000",
    title: "Title",
    type: "Type",
    ___topLevelClientField: true,
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
                        index: 0,
                        ___deepClientFieldInArray: true
                      }
                    ]
                  }
                }
              },
              nested3B: {
                data: {
                  id: "50000000-0000-0000-0000-00000000",
                  ___deepClientField: true,
                  nested4: {
                    data: []
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
    __typename: "root",
    id: "00000000-0000-0000-0000-00000000",
    title: "Title",
    type: "Type",
    topLevelClientField: true,
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
                deepClientFieldInArray: true,
                title: "Test",
                index: 0
              }
            ]
          },
          nested3B: {
            __typename: "nested3",
            id: "50000000-0000-0000-0000-00000000",
            deepClientField: true,
            nested4: []
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

  const fragmentRecursive = convertToGraph({
    input: realWorldExample,
    typename: "root",
    fieldMap: { nested1: "nested1", nested2: "nested2", nested3A: "nested3", nested3B: "nested3", nested4: "nested4", relatedObject: "relatedObject" }
  });

  console.log(" --> fragmentRecursive", JSON.stringify(fragmentRecursive, null, 2));

  expect(fragmentRecursive).toMatchObject(expected);
});

test("stripInsertInputClientFields - object should return as expected", () => {
  const foo = {
    id: 1,
    ___clientField: true,
    bar: { id: 2, ___clientField: true },
    baz: [
      { id: 3, name: "foo baz 3", __typename: "Baz", ___clientField: true },
      { id: 4, name: "foo baz 4", __typename: "Baz", ___clientField: true }
    ]
  };

  const expected = {
    id: 1,
    bar: { id: 2 },
    baz: [
      { id: 3, name: "foo baz 3", __typename: "Baz" },
      { id: 4, name: "foo baz 4", __typename: "Baz" }
    ]
  };

  const result = stripInsertInputClientFields({ input: foo });

  expect(result).toMatchObject(expected);
  expect(result.___clientField).toBeUndefined();
  expect(result.bar.___clientField).toBeUndefined();
  expect(result.baz[0].___clientField).toBeUndefined();
  expect(result.baz[1].___clientField).toBeUndefined();
});
