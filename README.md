# Overview

graphql-codegen-hasura is a collection of code generator plugins for [graphql-code-generator](https://graphql-code-generator.com/). These plugins are designed to automate coding tasks around the development of a strongly typed client for a [Hasura](https://hasura.io/) backend. The majority of the code generated is strongly-typed wrappers for [Apollo GraphQL](https://www.apollographql.com/), in addition to a number of convenience features, including:

- Strongly typed wrappers for all the Hasura/ApolloGrapqh methods (works great with code suggestion/auto-completion), organized into combined "GQLHelper" and "GQLHook" objects
- Auto optimistic caching option provided for all Inserts, Updates, and Deletes
- Automatically populates created_at and updated_at timestamp fields, if provided for insert but left null
- Query and subscription results provide entity parameter directly on results object (instead of having to pick out of deeply nested result field)
- Automatically calls cache.evit on entity deletion
- Automatically adds \_\_typename fields on cache inserts
- Generates a range of convenience methods for querying and manipulating the Apollo cache
- Automatically convert Hasura input graphs to fragment graphs when inserting into local cache with cache\* methods

## Status: \*BETA\*

Important Note: Despite the version number, this project is at "Beta" status, with an evolving codebase. However, any breaking changes will be released with new minor or major version bumps in order to minimize disruption to any consumers, and detailed in [Release Notes](##Release-Notes)

## Approach

These plugins follow a **Fragment First** approach to Hasura client code generation:

1. The Developer defines one or multiple gql Fragments in source code
2. The plugins scans the target source code for gql Fragments
3. The plugins generate CRUD and config gql and TypeScript code based on the located fragments

## Example

**You Define A Fragment Like So:**

```TypeScript
export const DogFragmentDoc = gql`
  fragment Dog on dogs {
    breed
    id
  }
`;
```

The graphql-codegen-hasura plugins can then generate a 'GQLHooks' and 'GQLHelper' object which you can then use to make CRUD calls to your API.
All the generated methods are strongly typed counterparts for methods on the AplloGraphQL client (with some augmentations).

### GQLHelper Generated Methods

```TypeScript
// GQLHelper Object - Available Methods

// Query
GQLHelper.Fragments.Dog.queryById(/* params */)               // Query By id
GQLHelper.Fragments.Dog.queryObjects(/* params */)            // Query

// Subscribe
GQLHelper.Fragments.Dog.subscribeToById(/* params */)         // Subscribe by id
GQLHelper.Fragments.Dog.subscribeToObjects(/* params */)      // Subscribe

// Insert
GQLHelper.Fragments.Dog.insert(/* params */)                  // Insert single entity
GQLHelper.Fragments.Dog.insertWithOnConflict(/* params */)    // Insert with strongly types onconflict options
GQLHelper.Fragments.Dog.insertObjects(/* params */)           // Insert one or multiple entities

// Update
GQLHelper.Fragments.Dog.updateById(/* params */)              // Update by id
GQLHelper.Fragments.Dog.updateObjects(/* params */)           // Update one or multiple entities

// Delete
GQLHelper.Models.Dog.removeById(/* params */)                 // Delete entity by id
GQLHelper.Models.Dog.removeObjects(/* params */)              // Delete one or multiple entities

// Watch
GQLHelper.Fragments.Dog.watchQueryById(/* params */)          // Subscribe to observable by id
GQLHelper.Fragments.Dog.watchQueryObjects(/* params */)       // Subscribe to observable

// Cache Read/Write
GQLHelper.Fragments.Dog.cacheReadFragmentById(/* params */)   // Read fragment from cache
GQLHelper.Fragments.Dog.cacheReadQueryById(/* params */)      // Read query from cache
GQLHelper.Fragments.Dog.cacheWriteFragmentById(/* params */)  // Write fragment to cache
GQLHelper.Fragments.Dog.cacheWriteQueryById(/* params */)     // Write query to cache
GQLHelper.Fragments.Dog.cacheWriteQueryObjects(/* params */)  // Write query to cache
GQLHelper.Fragments.Dog.cacheWriteQueryInsert(/* params */)   // Write 'InsertInput' to cache

```

### GQLHelper Usage Example

```TypeScript
// QueryById
GQLHelper.Fragments.Dog.queryById({ apolloClient, dogsId });

// Query Collection
GQLHelper.Fragments.Dog.queryByObjects({ apolloClient, options: { variables: { where: { breed: { _eq: 'scottie' } } } });

// Insert Mutation
GQLHelper.Fragments.Dog.insert({ apolloClient, dog: newDog);

// ... ETC. All the methods follow a the same pattern, and all allow the standard ApolloClient options objects to be populated and passed through.
```

### GQLHooks Generated Methods

```TypeScript
// GQLHooks Object - Available Methods

// Query
GQLHooks.Fragments.Dog.useQueryById(/* params */)            // Hook to query by id
GQLHooks.Fragments.Dog.useQueryByIdLazy(/* params */)        // Hook to query by id - lazy execution
GQLHooks.Fragments.Dog.useQueryObjects(/* params */)         // Hook to query one or multiple entities
GQLHooks.Fragments.Dog.useQueryObjectsLazy(/* params */)     // Hook to query one or multiple entities - lazy execution

// Subscribe
GQLHooks.Fragments.Dog.useSubscribeToById(/* params */)      // Hook to subscribe by id
GQLHooks.Fragments.Dog.useSubscribeToObjects(/* params */)   // Hook to subscribe to one or multiple entities

// Insert
GQLHooks.Fragments.Dog.useInsert(/* params */)               // Hook to insert single entity
GQLHooks.Fragments.Dog.useInsertWithOnConflict(/* params */) // Hook to insert with strongly types onconflict options
GQLHooks.Fragments.Dog.useInsertObjects(/* params */)        // Hook to insert one or multiple entities

// Update
GQLHooks.Fragments.Dog.useUpdateById(/* params */)           // Hook to update by id
GQLHooks.Fragments.Dog.useUpdateObjects(/* params */)        // Hook to update one or multiple entities

// Delete
GQLHooks.Models.Dog.useRemoveById(/* params */)              // Hook to delete entity by id
GQLHooks.Models.Dog.useRemoveObjects(/* params */)           // Hook to delete one or multiple entities
```

### GQLHooks Usage Example

```TypeScript
// QueryById
{ dog, loading, errors } = await GQLHooks.Fragments.Dog.queryById({ apolloClient, dogsId });

// Query Collection
{ objects, loading, errors } = await GQLHooks.Fragments.Dog.useQueryByObjects({ apolloClient, options: { variables: { where: { breed: { _eq: 'scottie' } } } });

// Insert Mutation
const [addDog] = GQLHooks.Fragments.Dog.insert({ apolloClient, dog: newDog);
addDog({ type:'scottie' });


// ... ETC. All the methods follow a the same pattern, and all allow the standard ApolloClient options objects to be populated and passed through.
```

### Notes on 'WriteQuery' methods

All client/cache `WriteQuery` and `WriteFragment` methods accept Hasura `<TypeName>_Insert_Input` object graphs as well as the expected Fragment graphs.

Some usage notes:

**fieldMap Parameter**  
This parameter is options. It allows typenames to be specified for child relationships (and automatically added during the conversion). It also allows for specific fields to be ignored. This can be automated in the future, but is non-trivial dev. So, for future version or community pull request.

**Client Fields**  
Client (@client) fields can be added via in `<TypeName>_Insert_Input` object, by prefixing them with a triple underscore (\_\_\_).
This is converted to the fieldname (without prefix) for cache adds. Client fields are removed completely for api inserts (useInsert* and insert* methods).
This is kind of hacky, and there is probably a much better way to achieve this. \#futureDev

**\<TypeName\>\_Insert_Input Types**  
All of the client* and cache* methods accept both `Fragment` and `<TypeName>_Insert_Input` graphs. However, when adding `<TypeName>_Insert_Input` graphs to child properties of an object (for example - adding a new object to a child array field), the `<TypeName>_Insert_Input` will need to be cast to the fragment type. However, it will still be converted appropriately at runtime.

**Example Usage**  
See packages/graphql-codegen-hasura-core/src/utils.test.ts for example usage

### Further Information

- See [ApolloGraphQL Documentation](https://www.apollographql.com/docs/react/) for specifics on the underlying client operations
- See [ApolloGraphQL Documentation](https://www.apollographql.com/docs/react/) for specifics on the underlying backend operations
- See below and [demo project](https://github.com/ahrnee/graphql-codegen-hasura/tree/master/demo/src/autogen/hasura) for further details

## Apollo Version

Please note, this library currently only supports version 3 of the React Apollo client

## Quick Start

To quickly view the type of code that gets generated, view the [autogen code files in the demo project](https://github.com/ahrnee/graphql-codegen-hasura/tree/master/demo/src/autogen/hasura).

To quickly try out the code-generation:

1. Checkout the project to your local computer
2. Navigate to the demo directory
3. Run the following commands

```
  1. lerna bootstrap
  2. npm run build-and-generate
```

## The Plugins

These plugins require and augment the existing fantastic GraphQL code generator plugins available from [graphql-code-generator](https://graphql-code-generator.com/)

- **graphql-codegen-hasura-core**
  - Supporting types and functions for generated code. Should be referenced in dependencies of package.json by all code consuming the generated code
- **graphql-codegen-hasura-gql**
  - Generates [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) gql mutations and queries for every _Fragment_ defined in the targeted (code) documents
- **graphql-codegen-hasura-typescript**
  - Generates [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) TypeScript helper methods for every _Fragment_ defined in the targeted (code) documents
- **graphql-codegen-hasura-react**
  - Generates [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) React Hooks for every _Fragment_ defined in the targeted (code) documents
- **graphql-codegen-hasura-client-config**
  - Generates TypeScript TypePolicies and Resolver Types for tables related to GQL fragments found in the targeted documents (code)

## Structure

This is a mono-repo project that contains multiple npm packages (under the packages folder), in addition to a demo project (under the demo folder).

## Usage

The easiest way to quickly get going is to view the following files in the demo project as a starting point:

- **Gql Generation Config**: `demo/graphql-codegen-gql.yaml`
- **TypesScript Generation Config**: `demo/graphql-codegen-typescript.yaml`
- **Output**: See [generated code in demo](https://github.com/ahrnee/graphql-codegen-hasura/tree/master/demo/src/autogen/hasura) and [See plugin details section below](#plugin-details).

It is **important to note**: The TypeScript Generation leverages the files created in the GQL generation step. As such, **it is important to run the GQL generation step prior to the TypeScript generation step**.

## Installation

1. Start with an existing TypeScript React app, or create one using:

```
    create-react-app my-project --typescript
```

2. Add the package dependencies required by graphql-codegen-hasura:

```
    npm install @graphql-codegen/cli @graphql-codegen/introspection @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo
```

3. Add the graphql-codegen-hasura packages:

```
    npm install graphql-codegen-hasura-core graphql-codegen-hasura-gql graphql-codegen-hasura-typescript graphql-codegen-hasura-react graphql-codegen-hasura-client-config
```

4. Create configuration YAML files (see below)

5. Run the codegen commands in a command console

```
graphql-codegen --config=graphql-codegen-gql.yaml;
graphql-codegen --config=graphql-codegen-typescript.yaml
```

## Configuration

See [graphql-code-generator documentation](https://graphql-code-generator.com/docs/getting-started/codegen-config) for configuration instructions. See below for the specific configuration flags that are available on these plugins

### graphql-codegen-hasura-gql plugin

- fragmentRelativeImportPath: import path to the gql fragment generated code. Only required if withFragments:false
- trimString: optional string to trim from each type name. Useful for trimming Hasura prepended schema name
- withFragments: boolean flag for fragment gql code generation
- withQueries: boolean flag for query gql code generation
- withInserts: boolean flag for insert gql code generation
- withUpdates: boolean flag for update gql code generation
- withDeletes: boolean flag for delete gql code generation

### graphql-codegen-hasura-typescript plugin

- typescriptCodegenOutputPath: import path to the code generated with dependent @graphql-codegen/typescript generated code
- trimString: optional string to trim from each type name. Useful for trimming Hasura prepended schema name
- withQueries: boolean flag for query TypeScript code generation
- withInserts: boolean flag for insert TypeScript code generation
- withUpdates: boolean flag for update TypeScript code generation
- withDeletes: boolean flag for delete TypeScript code generation

### graphql-codegen-hasura-react plugin

- typescriptCodegenOutputPath: import path to the code generated with dependent @graphql-codegen/typescript generated code
- trimString: optional string to trim from each type name. Useful for trimming Hasura prepended schema name
- withQueries: boolean flag for query Hooks code generation
- withInserts: boolean flag for insert Hooks code generation
- withUpdates: boolean flag for update Hooks code generation
- withDeletes: boolean flag for delete Hooks code generation

### graphql-codegen-hasura-client-config plugin

- typescriptCodegenOutputPath: import path to the code generated with dependent @graphql-codegen/typescript generated code
- trimString: optional string to trim from each type name. Useful for trimming Hasura prepended schema name
- withQueries: boolean flag for query Hooks code generation
- withTypePolicies: boolean flag for Type Policies code generation
- withResolverTypes: boolean flag for Resolver Types code generation

## Plugin Details

### graphql-codegen-hasura-gql plugin

#### Overview

Generates [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) gql mutations and queries for every _Fragment_ defined in the targeted (code) documents.

See [demo/src/autogen/hasura/gql.ts](https://github.com/ahrnee/graphql-codegen-hasura/tree/master/demo/src/autogen/hasura) for generated output files.

### graphql-codegen-hasura-typescript plugin

#### Overview

Generates [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) TypeScript helper methods for every _Fragment_ defined in the targeted (code) documents. Provides wrapped client.query & client.mutate calls, in addition to adding some convenience features.

See [demo/src/autogen/hasura/ts.ts](https://github.com/ahrnee/graphql-codegen-hasura/tree/master/demo/src/autogen/hasura) for generated output files.

### graphql-codegen-hasura-react plugin

#### Overview

Generates [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) React Hooks for every _Fragment_ defined in the targeted (code) documents.

See [demo/src/autogen/hasura/ts-react.ts](https://github.com/ahrnee/graphql-codegen-hasura/tree/master/demo/src/autogen/hasura) for generated output files.

### graphql-codegen-hasura-client-config plugin

#### Overview

Generates TypeScript Type Policies and Resolver Types for tables related to GQL fragments found in the targeted documents (code).

See [demo/src/autogen/hasura/ts-config.ts](https://github.com/ahrnee/graphql-codegen-hasura/tree/master/demo/src/autogen/hasura) for generated output files.

## Naming Conventions

A basic naming convention being followed:

- `*Model` is used for any entity or fieldset that contains only scalars, and not child entities are referenced or included
- `*Graph` is used for any entity or fieldset that contains or references child entities

## Demo

The demo project is simply:

- A vanilla Create-React-App application
- A basic integration of this graphql-codegen-hasura tool
- Configured to point to the demo hasura database: https://realtime-location-tracking.demo.hasura.app/console
- The code generation results have be produced, and committed to the `/demo/src/autogen` folder

## Motivation

[Hasura](https://hasura.io/) is a fantastic tool for the rapid development of a GraphQL backend.
[Apollo GraphQL](https://www.apollographql.com/) is a suite of GraphQL tooling, including a great Client.
[graphql-code-generator](https://graphql-code-generator.com/) is a very helpful code generation tool and library, to automate the generation of much of the boilerplate code required to use GraphQL. However, there still remained quite a bit of boiler plate code to be written.

The consistency and predictability of the [Hasura](https://hasura.io/) GQL backend implementation, provides an opportunity to automate much of the remaining code for standard single-table mutations and queries, and multi-table helper code. These plugins are designed to provide this.

## Disclaimers & Known Issues

This code was initially developed for use in a single separate commercial project. It is being shared in case useful to others, and as a contribution to the development community and the great GraphQL tools that already exist. The original implementation did just enough to meet the goals and needs of the initial project.

Known Issues Include:

- The majority of the codegen relies on each table having an `id` field. See (Refinements Needed)[##Refinements-and-Enhancements-Needed] section below for details
- Does not support entities with multi-field primary keys

## Refinements and Enhancements Needed

There are many refinements and enhancements that would be beneficial, and contributions to that end are encouraged. Notable examples include:

1. Remove requirement for primary key field to be named `id`\*
2. Support tables with multiple primary keys
3. Automatically generate fieldMap property for clientWriteInsertQuery method (see packages/graphql-codegen-hasura-core/src/utils.test.ts for examples of this method)
4. Improve client field handling mechanism for \*WriteQueryInsert methods
5. Add more automated tests
6. Add validation (especially for checking for package prerequisites). See [these docs](https://graphql-code-generator.com/docs/custom-codegen/validate-configuration)
7. Rewrite the plugins to use the graphql-code-generator [recommended Visitor pattern](https://graphql-code-generator.com/docs/custom-codegen/using-visitor)\*\*

## Help Wanted

\*The main issue with [Refinements Needed](##Refinements-and-Enhancements-Needed) item 1 (above) is how to determine a primary key from a GQL schema (and FieldDefinitionNodes). Currently the code relies on the name of the primary key field being `id`. If anyone knows how to identify a primary key field from the GQL schema, let me know, or submit a pull request with the fix. The relevant section of code is [here](https://github.com/ahrnee/graphql-codegen-hasura/blob/fbbb449ad5e4155dbc0b2cc7955712695d7d86a8/packages/graphql-codegen-hasura-shared/src/utils.ts#L78).

\*\* Contributions to [Refinements Needed](##Refinements-and-Enhancements-Needed) item 7 (above) would be welcome. This would unlock powerful additional codegen capabilities at a field level (currently limited to table level). Familiarity with the Visitor pattern (or willingness to learn it) is a prerequisite.

## Notes

- This is development is not affiliated with either the [graphql-code-generator](https://graphql-code-generator.com/) team, the [Hasura](https://hasura.io/) team, or the [Apollo GraphQL](https://www.apollographql.com/) team
- graphql-code-generator only picking up gql from 'graphql-tag' import, and not the newer '@apollo/client' import. The 'graphql-tag' import will continue to be used until this is addressed, even for react-apollo v3

## Release Notes

### Notes 4.9.0

- _Breaking Change_: The Client* and Cache* methods have been consolidated into cache* methods. This is due to a change in the ApolloClient dependency that meant the behavior was the same for both, making the additional Client* methods redundant
- _Breaking Change_: The Cache\* methods now require the ApolloCache object as a parameter, instead of the ApolloClient object (Accessible via ApolloClient.cache). This allows the cache methods to participate in a transaction via cache.performTransaction. This is a useful, but not well documented method. (see [Apollo source](https://github.com/apollographql/apollo-client/blob/61a799b2cd5e1657eab4ea97485828671ce35286/src/cache/inmemory/inMemoryCache.ts#L244) for details).
- _Breaking Change_: The Cache\* methods will now, by default, trigger client-side Query update broadcasts (see Apollo documentation for details of this).
- An additional 'broadcast' parameter has been added to all cacheWrite\* methods, in order to support silent cache updates
