import { convertToGraph, stripInsertInputClientFields, convertToInsertInput } from ".";

/*
 *
 */
test("convertToGraph - object should return as expected", () => {
  const foo = { id: 1, bar: { id: 2, name: "foo bar" } };

  const fragment = convertToGraph({ input: foo, fieldMap: { typenames: { bar: "Bar" } } });

  expect(fragment).toMatchObject({ id: 1, bar: { id: 2, name: "foo bar", __typename: "Bar" } });
});

test("convertToGraph - object with root typename should return as expected", () => {
  const foo = { id: 1, bar: { id: 2, name: "foo bar" } };

  const fragment = convertToGraph({ input: foo, fieldMap: { typenames: { bar: "Bar" } }, typename: "Foo" });

  expect(fragment).toMatchObject({ id: 1, __typename: "Foo", bar: { id: 2, name: "foo bar", __typename: "Bar" } });
});

test("convertToGraph - updated_at and created_at fields should populated as expected", () => {
  const foo = { id: 1, updated_at: null, bar: { id: 2, name: "foo bar", created_at: null } };

  const fragment = convertToGraph({ input: foo, fieldMap: { typenames: { bar: "Bar" } }, typename: "Foo" });

  expect(fragment).toMatchObject({ id: 1, __typename: "Foo", bar: { id: 2, name: "foo bar", __typename: "Bar" } });
  expect(fragment.updated_at).toBeTruthy();
  expect(fragment.bar.created_at).toBeTruthy();
});

test("convertToGraph - object with root typename but no Id should return as expected", () => {
  const foo = { bar: { id: 2, name: "foo bar" } };

  const fragment = convertToGraph({ input: foo, fieldMap: { typenames: { bar: "Bar" } }, typename: "Foo" });

  expect(fragment).toMatchObject({ __typename: "Foo", bar: { id: 2, name: "foo bar", __typename: "Bar" } });
});

test("convertToGraph - object with client fields should return as expected", () => {
  const foo = { id: 1, ___bar: { id: 2, name: "foo bar" } };

  const fragment = convertToGraph({ input: foo, fieldMap: { typenames: { bar: "Bar" } } });

  expect(fragment).toMatchObject({ id: 1, bar: { id: 2, name: "foo bar", __typename: "Bar" } });
});

/*
 *
 */
test("convertToGraph - plain array should return as expected (no typename)", () => {
  const foo = { id: 1, bar: [{ id: 2 }, { id: 3 }] };

  const fragment = convertToGraph({ input: foo });

  expect(fragment).toMatchObject({
    id: 1,
    bar: [{ id: 2 }, { id: 3 }],
  });
  expect(fragment.bar[0]._typename).toBeUndefined();
});

/*
 *
 */
test("convertToGraph - plain array should return as expected (with typename)", () => {
  const foo = { id: 1, bar: [{ id: 2 }, { id: 3 }] };

  const fragment = convertToGraph({ input: foo, fieldMap: { typenames: { bar: "Bar" } } });

  expect(fragment).toMatchObject({
    id: 1,
    bar: [
      { id: 2, __typename: "Bar" },
      { id: 3, __typename: "Bar" },
    ],
  });
});

test("convertToGraph - plain array should be omitted", () => {
  const foo = { id: 1, bar: [{ id: 2 }, { id: 3 }] };

  const fragment = convertToGraph({ input: foo, fieldMap: { ignore: { bar: true } } });

  expect(fragment).toMatchObject({ id: 1 });
  expect(fragment.bar).toBeUndefined();
});

/*
 *
 */
test("convertToGraph - insertInput object should return as expected", () => {
  const foo = { id: 1, bar: { data: { id: 2 } } };

  const fragment = convertToGraph({ input: foo, fieldMap: { typenames: { bar: "Bar" } } });

  expect(fragment).toMatchObject({ id: 1, bar: { id: 2, __typename: "Bar" } });
});

/*
 *
 */
test("convertToGraph - insertInput array should return as expected", () => {
  const foo = { id: 1, bar: { data: [{ id: 2 }, { id: 3 }] } };

  const fragment = convertToGraph({ input: foo, fieldMap: { typenames: { bar: "Bar" } } });

  expect(fragment).toMatchObject({
    id: 1,
    bar: [
      { id: 2, __typename: "Bar" },
      { id: 3, __typename: "Bar" },
    ],
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
        { id: 3, name: "foo bar 3", baz: { data: [{ id: 4, name: "foo bar baz 4" }] } },
      ],
    },
  };

  const expected = {
    id: 1,
    bar: [
      { id: 2, name: "foo bar 2", __typename: "Bar" },
      { id: 3, name: "foo bar 3", __typename: "Bar", baz: [{ id: 4, name: "foo bar baz 4", __typename: "Baz" }] },
    ],
  };

  const fragmentRecursive = convertToGraph({ input: foo, fieldMap: { typenames: { bar: "Bar", baz: "Baz" } } });

  expect(fragmentRecursive).toMatchObject(expected);
});

test("convertToGraph - insertInput recursive (deeper definition copied as-is) should return as expected", () => {
  const foo = {
    id: 1,
    bar: {
      data: [
        { id: 2, name: "foo bar 2" },
        { id: 3, name: "foo bar 3", baz: { data: [{ id: 4, name: "foo bar baz 4" }] } },
      ],
    },
  };

  const expected = {
    id: 1,
    bar: [
      { id: 2, name: "foo bar 2", __typename: "Bar" },
      { id: 3, name: "foo bar 3", __typename: "Bar" },
    ],
  };

  const fragmentRecursive = convertToGraph({ input: foo, fieldMap: { typenames: { bar: "Bar" } } });

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
        { id: 3, name: "foo bar 3", baz: { data: [{ id: 4, name: "foo bar baz 4" }] } },
      ],
    },
  };

  const expected = {
    id: 1,
    bar: [
      { id: 2, name: "foo bar 2", __typename: "Bar" },
      { id: 3, name: "foo bar 3", __typename: "Bar" },
    ],
  };

  const fragmentRecursive = convertToGraph({ input: foo, fieldMap: { typenames: { bar: "Bar" }, ignore: { baz: true } } });

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
                        ___deepClientFieldInArray: true,
                      },
                    ],
                  },
                },
              },
              nested3B: {
                data: {
                  id: "50000000-0000-0000-0000-00000000",
                  ___deepClientField: true,
                  nested5: {
                    data: [],
                  },
                },
              },
            },
          },
        },
      ],
    },
    related_id: "70000000-0000-0000-0000-00000000",
    relatedObject: {
      data: {
        id: "80000000-0000-0000-0000-00000000",
      },
    },
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
                index: 0,
              },
            ],
          },
          nested3B: {
            __typename: "nested3",
            id: "50000000-0000-0000-0000-00000000",
            deepClientField: true,
            nested5: [],
          },
        },
      },
    ],
    related_id: "70000000-0000-0000-0000-00000000",
    relatedObject: {
      __typename: "relatedObject",
      id: "80000000-0000-0000-0000-00000000",
    },
  };

  const fragmentRecursive = convertToGraph({
    input: realWorldExample,
    typename: "root",
    fieldMap: {
      typenames: { nested1: "nested1", nested2: "nested2", nested3A: "nested3", nested3B: "nested3", nested4: "nested4", nested5: "nested5", relatedObject: "relatedObject" },
    },
  });

  expect(fragmentRecursive).toMatchObject(expected);
});

test("stripInsertInputClientFields - object should return as expected", () => {
  const foo = {
    id: 1,
    ___clientField: true,
    bar: { id: 2, ___clientField: true },
    baz: [
      { id: 3, name: "foo baz 3", __typename: "Baz", ___clientField: true },
      { id: 4, name: "foo baz 4", __typename: "Baz", ___clientField: true, stringArray: ["item1", "item2"] },
    ],
    stringArray: ["item1"],
  };

  const expected = {
    id: 1,
    bar: { id: 2 },
    baz: [
      { id: 3, name: "foo baz 3" },
      { id: 4, name: "foo baz 4", stringArray: ["item1", "item2"] },
    ],
    stringArray: ["item1"],
  };

  const result = stripInsertInputClientFields({ input: foo });

  expect(result).toMatchObject(expected);
  expect(result.___clientField).toBeUndefined();
  expect(result.bar.___clientField).toBeUndefined();
  expect(result.baz[0].___clientField).toBeUndefined();
  expect(result.baz[0].__typename).toBeUndefined();
  expect(result.baz[1].___clientField).toBeUndefined();
  expect(result.baz[1].__typename).toBeUndefined();
});

test("convertToInsertInput - deep nested realworld example", () => {
  const realWorldExample = {
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
        clientOnlyField: true,
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
                index: 0,
              },
            ],
          },
          nested3B: {
            __typename: "nested3",
            id: "50000000-0000-0000-0000-00000000",
            deepClientField: true,
            nested5: [],
            created_at: "2020-03-20T12:46:22.558695+00:00",
            updated_at: "2020-03-20T12:46:22.558695+00:00",
          },
        },
      },
    ],
    related_id: "70000000-0000-0000-0000-00000000",
    relatedObject: {
      __typename: "relatedObject",
      id: "80000000-0000-0000-0000-00000000",
    },
  };

  const expected = {
    id: "00000000-0000-0000-0000-00000000B",
    title: "Title",
    type: "Type",
    topLevelClientField: true,
    nested1: {
      data: [
        {
          id: "10000000-0000-0000-0000-00000000B",
          title: "Title",
          type: "Type",
          ___clientOnlyField: true,
          nested2: {
            data: {
              id: "20000000-0000-0000-0000-00000000B",
              nested3A: {
                data: {
                  id: "30000000-0000-0000-0000-00000000B",
                  nested4: {
                    data: [
                      {
                        id: "40000000-0000-0000-0000-00000000B",
                        title: "Test",
                        index: 0,
                        deepClientFieldInArray: true,
                      },
                    ],
                  },
                },
              },
              nested3B: {
                data: {
                  id: "50000000-0000-0000-0000-00000000B",
                  deepClientField: true,
                  nested5: {
                    data: [],
                  },
                },
              },
            },
          },
        },
      ],
    },
    relatedObject: {
      data: {
        id: "80000000-0000-0000-0000-00000000B",
      },
    },
  };

  const insertInputRecursive = convertToInsertInput({
    input: realWorldExample,
    fieldMap: {
      typenames: { nested1: "nested1", nested2: "nested2", nested3A: "nested3", nested3B: "nested3", nested4: "nested4", nested5: "nested5", relatedObject: "relatedObject" },
      replace: {
        id: (fieldname: string, originalVal: string) => {
          return `${originalVal}B`;
        },
      },
      clientOnly: { clientOnlyField: true },
      ignore: {
        related_id: true,
      },
    },
  });

  // console.log(` ------> insertInputRecursive`, JSON.stringify(insertInputRecursive, null, 2));
  // console.log(` ------> expected`, JSON.stringify(expected, null, 2));

  expect(insertInputRecursive).toMatchObject(expected);
  expect(insertInputRecursive.__typename).toBeUndefined();
  expect(insertInputRecursive.related_id).toBeUndefined();
  expect(insertInputRecursive.nested1.data[0]).toBeDefined();
  expect(insertInputRecursive.nested1.data[0].__typename).toBeUndefined();
  expect(insertInputRecursive.nested1.data[0].nested2.data.nested3B.data).toBeDefined();
  expect(insertInputRecursive.nested1.data[0].nested2.data.nested3B.data.created_at).toBeUndefined();
  expect(insertInputRecursive.nested1.data[0].nested2.data.nested3B.data.updated_at).toBeUndefined();
});
