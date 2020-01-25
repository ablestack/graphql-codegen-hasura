# Overview

graphql-codegen-hasura is a collection of code generator plugins for [graphql-code-generator](https://graphql-code-generator.com/). These plugins are designed to automate coding tasks around the development of a strongly typed client for a [Hasura](https://hasura.io/) backend. The majority of the code generated is strongly-typed wrappers for [Apollo GraphQL](https://www.apollographql.com/), in addition to a number of convenience features, including:

- Strongly typed wrappers for all the Hasura/ApolloGrapqh methods (works great with code suggestion/auto-completion), organized into combined "GQLHelper" and "GQLHook" objects
- Auto optimistic caching option provided for all Inserts, Updates, and Deletes
- Query and subscription results provide entity parameter directly on results object (instead of having to pick out of deeply nested result field)
- Automatically calls cache.evit on entity deletion

## Status: \*BETA\*

Important Note: Despite the version number, this project is at "Beta" status, with an evolving codebase. However, any breaking changes will be released with new minor or major version bumps in order to minimize disruption to any consumers.

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

- See [ApolloGraphQL Documentation](https://www.apollographql.com/docs/react/) for specifics on the underlying client operations
- See [ApolloGraphQL Documentation](https://www.apollographql.com/docs/react/) for specifics on the underlying backend operations
- See below for specific augmentations and convenience features provided by the generated code

### GQLHelper Generated Code

```TypeScript
// GQLHelper Object - Available Methods

GQLHelper.Fragments.Dog.queryById               // Query By id
GQLHelper.Fragments.Dog.queryObjects            // Query
GQLHelper.Fragments.Dog.subscribeToById         // Subscribe by ID
GQLHelper.Fragments.Dog.subscribeToObjects      // Subscribe

GQLHelper.Fragments.Dog.insert                  // Insert single entity
GQLHelper.Fragments.Dog.insertWithOnConflict    // Insert with strongly types onconflict options
GQLHelper.Fragments.Dog.insertObjects           // Insert one or multiple entities
GQLHelper.Fragments.Dog.updateById              // Update by ID
GQLHelper.Fragments.Dog.updateObjects           // Update one or multiple entities

GQLHelper.Fragments.Dog.watchQueryById          // Subscribe to observable by id
GQLHelper.Fragments.Dog.watchQueryObjects       // Subscribe to observable

GQLHelper.Fragments.Dog.clientReadFragmentById  // Read fragment from cache
GQLHelper.Fragments.Dog.clientWriteFragmentById // Write fragment to cache (and broadcast)
GQLHelper.Fragments.Dog.cacheWriteFragmentById  // Write fragment to cache (no broadcast)
GQLHelper.Fragments.Dog.clientReadQueryById     // Read query from cache
GQLHelper.Fragments.Dog.clientWriteQueryById    // Write query to cache (and broadcast)
GQLHelper.Fragments.Dog.cacheWriteQueryById     // Quietly write query to cache (no broadcast)

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

## Apollo Version

Please note, this library currently only supports version 3 of the React Apollo client

## Quick Start

To quickly view the type of code that gets generated, view the [autogen code files in the demo project](https://github.com/ahrnee/graphql-codegen-hasura/tree/master/demo/src/autogen/hasura).

To quickly try out the code-generation:

1. Checkout the project to your local computer
2. Navigate to the demo directory
3. Run the following command

```
  npm install; npm generate;
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

[Hasura](https://hasura.io/) is a fantastic tool for the rapid development of a GraphQL backend. [Apollo GraphQL](https://www.apollographql.com/) is a suite of GraphQL tooling, including a great Client. [graphql-code-generator](https://graphql-code-generator.com/) is a very helpful code generation tool and library, to automate the generation of much of the boilerplate code required to use GraphQL. However, there still remained quite a bit of boiler plate code to be written.

The consistency and predictability of the [Hasura](https://hasura.io/) GQL backend implementation, provided an opportunity to automate much of the remaining code for standard single-table mutations and queries, and multi-table helper code. This plugin is an attempt to help do this.

## Disclaimers & Known Issues

This code was initially developed for use in a single separate commercial project. It is being shared in case useful to others, and as a contribution to the development community and the great GraphQL tools that already exist. The original implementation did just enough to meet the goals and needs of the initial project.

Known Issues Include:

- None at present

## Refinements and Enhancements Needed

There are many refinements and enhancements that would be beneficial, and contributions to that end are encouraged. Notable examples include:

- Add automated tests
- Add validation (especially for checking for package prerequisites). See [these docs](https://graphql-code-generator.com/docs/custom-codegen/validate-configuration)
- Rewrite the plugins to use the graphql-code-generator [recommended Visitor pattern](https://graphql-code-generator.com/docs/custom-codegen/using-visitor)

## Notes

- This is development is not affiliated with either the [graphql-code-generator](https://graphql-code-generator.com/) team, the [Hasura](https://hasura.io/) team, or the [Apollo GraphQL](https://www.apollographql.com/) team
- graphql-code-generator only picking up gql from 'graphql-tag' import, and not the newer '@apollo/client' import. The 'graphql-tag' import will continue to be used until this is addressed, even for react-apollo v3
