# Overview

graphql-codegen-hasura is a collection of code generator plugins for [graphql-code-generator](https://graphql-code-generator.com/). These plugins are designed to automate coding tasks around the development of a strongly typed client for a [Hasura](https://hasura.io/) backend. The majority of the code generated is strongly-typed wrappers for [Apollo GraphQL](https://www.apollographql.com/), in addition to a number of convenience features. \*

## Status: _ BETA _

Important Note: Despite the 2.x version number, this is a beta project, with an evolving (and thus unstable)codebase. Feel free to use the project "as is", but expect breaking changes when you retrieve updates. However, all any breaking changes will be released with a new version number in order to minimize disruption to consumers.

## Approaches

These plugins allow for the following approaches to Hasura client code generation (or a combination of both):

1.  **Fragment First**: Generate Hasura client code (gql & TypeScript) for every fragment defined in the target source code. This approach approach will generally provide greater long-term flexibility as it allows you to define and work with nested entity graphs. It also will only generate the code you need. However, it is slightly less automated, as it requires you to define graph fragments manually

2.  **Table First** (Deprecated): Generate Hasura client code (gql & TypeScript) for every table defined in Hasura. This approach allows you to get up and running the fastest. However, it may result in a lot of unused (and so unnecessary) code being generated.

## Quick Start

To quickly view the type of code that gets generated, view the [autogen code files in the demo project](https://github.com/ahrnee/graphql-codegen-hasura/tree/master/demo/src/autogen/hasura).

To quickly try out the code-generation:

1. Checkout the project to your local computer
2. Navigate to the demo directory
3. Run the following command

```
  yarn; yarn generate;
```

## The Plugins

These plugins require and augment the existing fantastic GraphQL code generator plugins available from [graphql-code-generator](https://graphql-code-generator.com/)

- **graphql-codegen-hasura-gql-from-schema**
  - Generates [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) gql fragments, mutations and queries for every _Table_ defined in the Hasura database
- **graphql-codegen-hasura-gql-from-documents**
  - Generates [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) gql mutations and queries for every _Fragment_ defined in the targeted (code) documents
- **graphql-codegen-hasura-typescript-from-schema**
  - Generates [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) TypeScript helper methods for every _Table_ defined in the Hasura database
- **graphql-codegen-hasura-typescript-from-documents**
  - Generates [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) TypeScript helper methods for every _Fragment_ defined in the targeted (code) documents
- **graphql-codegen-hasura-typescript-react-from-documents**
  - Generates [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) React Hooks for every _Fragment_ defined in the targeted (code) documents
- **graphql-codegen-hasura-typescript-config-from-documents**
  - Generates TypeScript TypePolicies and Resolver Types for tables related to GQL fragments found in the targeted documents (code)
  - Note: Only support reactApolloVersion 3

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
    yarn add @graphql-codegen/cli @graphql-codegen/introspection @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-react-apollo
```

3. Add the graphql-codegen-hasura packages:

```
    yarn add graphql-codegen-hasura-gql-from-schema graphql-codegen-hasura-gql-from-documents graphql-codegen-hasura-typescript-from-schema graphql-codegen-hasura-typescript-from-documents graphql-codegen-hasura-typescript-react-from-documents graphql-codegen-hasura-typescript-config-from-documents
```

4. Create configuration YAML files (see below)

5. Run the codegen commands in a command console

```
graphql-codegen --config=graphql-codegen-gql.yaml;
graphql-codegen --config=graphql-codegen-typescript.yaml
```

## Configuration

See [graphql-code-generator documentation](https://graphql-code-generator.com/docs/getting-started/codegen-config) for configuration instructions. See below for the specific configuration flags that are available on these plugins

### graphql-codegen-hasura-gql-from-schema plugin

- reactApolloVersion (2 | 3, default value: 3): sets the version of react-apollo
- fragmentRelativeImportPath: import path to the gql fragment generated code. Only required if withFragments:false
- trimString: optional string to trim from each type name. Useful for trimming Hasura prepended schema name
- withFragments: boolean flag for fragment gql code generation
- withQueries: boolean flag for query gql code generation
- withInserts: boolean flag for insert gql code generation
- withUpdates: boolean flag for update gql code generation
- withDeletes: boolean flag for delete gql code generation

### graphql-codegen-hasura-typescript-from-documents plugin

- reactApolloVersion (2 | 3, default value: 3): sets the version of react-apollo
- typescriptCodegenOutputPath: import path to the code generated with dependent @graphql-codegen/typescript generated code
- trimString: optional string to trim from each type name. Useful for trimming Hasura prepended schema name
- withQueries: boolean flag for query TypeScript code generation
- withInserts: boolean flag for insert TypeScript code generation
- withUpdates: boolean flag for update TypeScript code generation
- withDeletes: boolean flag for delete TypeScript code generation

### graphql-codegen-hasura-typescript-schema plugin

- reactApolloVersion (2 | 3, default value: 3): sets the version of react-apollo
- typescriptCodegenOutputPath: import path to the code generated with dependent @graphql-codegen/typescript generated code
- trimString: optional string to trim from each type name. Useful for trimming Hasura prepended schema name
- withQueries: boolean flag for query TypeScript code generation
- withInserts: boolean flag for insert TypeScript code generation
- withUpdates: boolean flag for update TypeScript code generation
- withDeletes: boolean flag for delete TypeScript code generation

### graphql-codegen-hasura-typescript-documents plugin

- reactApolloVersion (2 | 3, default value: 3): sets the version of react-apollo
- typescriptCodegenOutputPath: import path to the code generated with dependent @graphql-codegen/typescript generated code
- trimString: optional string to trim from each type name. Useful for trimming Hasura prepended schema name
- withQueries: boolean flag for query TypeScript code generation
- withInserts: boolean flag for insert TypeScript code generation
- withUpdates: boolean flag for update TypeScript code generation
- withDeletes: boolean flag for delete TypeScript code generation

### graphql-codegen-hasura-typescript-react-documents plugin

- reactApolloVersion (2 | 3, default value: 3): sets the version of react-apollo
- typescriptCodegenOutputPath: import path to the code generated with dependent @graphql-codegen/typescript generated code
- trimString: optional string to trim from each type name. Useful for trimming Hasura prepended schema name
- withQueries: boolean flag for query Hooks code generation
- withInserts: boolean flag for insert Hooks code generation
- withUpdates: boolean flag for update Hooks code generation
- withDeletes: boolean flag for delete Hooks code generation

### graphql-codegen-hasura-typescript-config-documents plugin

- typescriptCodegenOutputPath: import path to the code generated with dependent @graphql-codegen/typescript generated code
- trimString: optional string to trim from each type name. Useful for trimming Hasura prepended schema name
- withQueries: boolean flag for query Hooks code generation
- withTypePolicies: boolean flag for Type Policies code generation
- withResolverTypes: boolean flag for Resolver Types code generation

## Plugin Details

### graphql-codegen-hasura-gql-from-schema plugin

#### Overview

Generates gql fragments, mutations and queries for every _Table_ defined in the Hasura database.

See [demo/src/autogen/hasura/gql-from-schema.ts](https://github.com/ahrnee/graphql-codegen-hasura/tree/master/demo/src/autogen/hasura) for generated output files.

### graphql-codegen-hasura-gql-from-documents plugin

#### Overview

Generates [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) gql mutations and queries for every _Fragment_ defined in the targeted (code) documents.

See [demo/src/autogen/hasura/gql-from-documents.ts](https://github.com/ahrnee/graphql-codegen-hasura/tree/master/demo/src/autogen/hasura) for generated output files.

### graphql-codegen-hasura-typescript-from-schema plugin

#### Overview

Generates [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) TypeScript helper methods for every _Table_ defined in the Hasura database

Generates [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) TypeScript helper methods for every _Fragment_ defined in the targeted (code) documents. Provides wrapped client.query & client.mutate calls, in addition to adding some convenience features.

See [demo/src/autogen/hasura/ts-from-schema.ts](https://github.com/ahrnee/graphql-codegen-hasura/tree/master/demo/src/autogen/hasura) for generated output files.

### graphql-codegen-hasura-typescript-from-documents plugin

#### Overview

Generates [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) TypeScript helper methods for every _Fragment_ defined in the targeted (code) documents. Provides wrapped client.query & client.mutate calls, in addition to adding some convenience features.

See [demo/src/autogen/hasura/ts-from-documents.ts](https://github.com/ahrnee/graphql-codegen-hasura/tree/master/demo/src/autogen/hasura) for generated output files.

### graphql-codegen-hasura-typescript-react-from-documents plugin

#### Overview

Generates [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) React Hooks for every _Fragment_ defined in the targeted (code) documents.

See [demo/src/autogen/hasura/ts-react-from-documents.ts](https://github.com/ahrnee/graphql-codegen-hasura/tree/master/demo/src/autogen/hasura) for generated output files.

### graphql-codegen-hasura-typescript-config-from-documents plugin

#### Overview

Generates TypeScript Type Policies and Resolver Types for tables related to GQL fragments found in the targeted documents (code). **Note: Only support reactApolloVersion 3**.

See [demo/src/autogen/hasura/ts-config-from-documents.ts](https://github.com/ahrnee/graphql-codegen-hasura/tree/master/demo/src/autogen/hasura) for generated output files.

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

- Hasura views break the code generation

## Refinements and Enhancements Needed

There are many refinements and enhancements that would be beneficial, and contributions to that end are encouraged. Notable examples include:

- Fix known issues
- Add validation (especially for checking for package prerequisites). See [these docs](https://graphql-code-generator.com/docs/custom-codegen/validate-configuration)
- Rewrite the plugins to use the graphql-code-generator [recommended Visitor pattern](https://graphql-code-generator.com/docs/custom-codegen/using-visitor)

## Notes

- This is development is not affiliated with either the [graphql-code-generator](https://graphql-code-generator.com/) team, the [Hasura](https://hasura.io/) team, or the [Apollo GraphQL](https://www.apollographql.com/) team.
- graphql-code-generator only picking up gql from 'graphql-tag' import, and not the newer '@apollo/client' import. The 'graphql-tag' import will continue to be used until this is addressed, even for react-apollo v3.
