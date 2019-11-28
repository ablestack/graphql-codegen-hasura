# Overview

graphql-codegen-hasura is a collection of code generator plugins for [graphql-code-generator](https://graphql-code-generator.com/). These plugins are designed to automate some coding tasks around the development of a strongly typed [Hasura](https://hasura.io/) backend with an [Apollo GraphQL](https://www.apollographql.com/) React client.

These plugins require and augment the existing fantastic GraphQL code generator plugins available from [graphql-code-generator](https://graphql-code-generator.com/)

- The **graphql-codegen-hasura-gql** plugin generates gql fragments, mutations and queries for every _Table_ defined in the Hasura database
- The **graphql-codegen-hasura-typescript** plugin generates [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) TypeScript helper methods for every _Table_ defined in the Hasura database.

## Structure

This is a mono-repo project that contains multiple npm packages (under the packages folder), in addition to a demo project (under the demo folder).

## Usage

The easiest way to quickly get going is to view the following files in the demo project as a starting point:

- **Gql Generation Config**: `demo/graphql-codegen-gql.yaml`
- **TypesScript Generation Config**: `demo/graphql-codegen-typescript.yaml`
- **Output**: [demo/src/autogen/hasura](https://github.com/ahrnee/graphql-codegen-hasura/tree/master/demo/src/autogen/hasura)

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
    yarn add graphql-codegen-hasura-gql graphql-codegen-hasura-typescript
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

- fragmentImportFrom: import path to the gql fragment generated code. Only required if withFragments:false
- withFragments: boolean flag for fragment gql code generation
- withQueries: boolean flag for query gql code generation
- withInserts: boolean flag for insert gql code generation
- withUpdates: boolean flag for update gql code generation
- withDeletes: boolean flag for delete gql code generation

### graphql-codegen-hasura-typescript plugin

- primaryCodegenTypeScriptImportPath: import path to the code generated with dependent @graphql-codegen/typescript generated code
- withQueries: boolean flag for query TypeScript code generation
- withInserts: boolean flag for insert TypeScript code generation
- withUpdates: boolean flag for update TypeScript code generation
- withDeletes: boolean flag for delete TypeScript code generation

## Plugin Details

### graphql-codegen-hasura-gql plugin

#### Overview

Generates gql fragments, mutations and queries for every _Table_ defined in the Hasura database

#### Example Output for `User` Entity

```typescript
// Scalar Fields Fragment
//
export const usersModelFields = gql`
  fragment usersModelFields on users {
    created_at
    id
    name
  }
`;

// Fetch Query
//
const FETCH_USERS_MODEL = gql`
  query fetchusersModel($usersId: Int!) {
    users_by_pk(id: $usersId) {
      ...usersModelFields
    }
  }
  ${usersModelFields}
`;

// Insert Mutation
//
const INSERT_USERS_MODEL = gql`
  mutation insertusersModel($objects: [users_insert_input!]!, $onConflict: users_on_conflict) {
    insert_users(objects: $objects, on_conflict: $onConflict) {
      affected_rows
      returning {
        ...usersModelFields
      }
    }
  }
  ${usersModelFields}
`;

// Update Mutation
//
const UPDATE_USERS_MODEL = gql`
  mutation updateusersModelById($id: Int, $changes: users_set_input) {
    update_users(where: { id: { _eq: $id } }, _set: $changes) {
      affected_rows
      returning {
        ...usersModelFields
      }
    }
  }
  ${usersModelFields}
`;

// Remove Mutation
//
const REMOVE_USERS_MODEL = gql`
  mutation removeusersModelById($id: Int) {
    delete_users(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
  ${usersModelFields}
`;
```

### graphql-codegen-hasura-typescript plugin

#### Overview

Generates [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) TypeScript helper methods for every _Table_ defined in the Hasura database

The existing [@graphql-codegen/typescript-react-apollo](https://graphql-code-generator.com/docs/plugins/typescript-react-apollo) plugin already provides this capability for hooks. This plugin extends that to direct client.query & client.mutate calls, in addition to adding some convenience features. See [generated code in demo](https://github.com/ahrnee/graphql-codegen-hasura/tree/master/demo/src/autogen/hasura) for specifics

#### Example Output for `User` Entity

```typescript
// Fetch Helper
//
export async function fetchusersModel(apolloClient: ApolloClient<object>, usersId: string): Promise<usersModelFieldsFragment | null | undefined> {
  const usersResult = await apolloClient.query<FetchusersModelQuery>({ query: FetchusersModelDocument, variables: { usersId } });
  return usersResult.data.users_by_pk;
}

// Insert Helper
//
export async function insertusersModel(
  apolloClient: ApolloClient<object>,
  mutationOptions: Omit<MutationOptions<InsertusersModelMutation, InsertusersModelMutationVariables>, "mutation">
): Promise<{ result: FetchResult<InsertusersModelMutation>; returning: (usersModelFieldsFragment | null | undefined)[] | null | undefined }> {
  const result = await apolloClient.mutate<InsertusersModelMutation, InsertusersModelMutationVariables>({ mutation: InsertusersModelDocument, ...mutationOptions });

  const returning = result && result.data && result.data.insert_users && result.data.insert_users!.returning;

  return { result, returning };
}

// Update Helper
//
export async function updateusersModel(
  apolloClient: ApolloClient<object>,
  mutationOptions: Omit<MutationOptions<UpdateusersModelByIdMutation, UpdateusersModelByIdMutationVariables>, "mutation">
): Promise<{ result: FetchResult<UpdateusersModelByIdMutation>; returning: (usersModelFieldsFragment | null | undefined)[] | null | undefined }> {
  const result = await apolloClient.mutate<UpdateusersModelByIdMutation, UpdateusersModelByIdMutationVariables>({ mutation: UpdateusersModelByIdDocument, ...mutationOptions });

  const returning = result && result.data && result.data.update_users && result.data.update_users!.returning;

  return { result, returning };
}

// Delete Helper
//
export async function removeusersModel(
  apolloClient: ApolloClient<object>,
  mutationOptions: Omit<MutationOptions<RemoveusersModelByIdMutation, RemoveusersModelByIdMutationVariables>, "mutation">
): Promise<{ result: FetchResult<RemoveusersModelByIdMutation>; returning: (usersModelFieldsFragment | null | undefined)[] | null | undefined }> {
  const result = await apolloClient.mutate<RemoveusersModelByIdMutation, RemoveusersModelByIdMutationVariables>({ mutation: RemoveusersModelByIdDocument, ...mutationOptions });

  const returning = result && result.data && result.data.remove_users && result.data.remove_users!.returning;

  return { result, returning };
}
```

## Naming Conventions

A basic naming convention being followed:

- `*Model` is used for any entity or fieldset that contains only scalars, and not child entities are referenced or included
- `*Graph` is used fro any entity or fieldset that contains or references child entities

## Demo

The demo project is simply:

- A vanilla Create-React-App application
- A basic integration of this graphql-codegen-hasura tool
- Configured to point to the demo hasura database: https://realtime-location-tracking.demo.hasura.app/console
- The code generation results have be produced, and committed to the `/demo/src/autogen` folder

## Motivation

[Hasura](https://hasura.io/) is a fantastic tool for the rapid development of a GraphQL backend. [Apollo GraphQL](https://www.apollographql.com/) is a suite of GraphQL tooling, including a great Client. [graphql-code-generator](https://graphql-code-generator.com/) is a fantastic code generation tool and library, to automate the generation of much of the boilerplate code required to use GraphQL. However, there still remained quite a bit of boiler plate code to be written.

The consistency and predictability of the Hasura](https://hasura.io/) GQL backend implementation, provided an opportunity to automate much of the remaining code for standard single-table mutations and queries, and multi-table helper code. This plugin is an attempt to do some of that.

## Disclaimers & Known Issues

This code was initially developed for use in a single separate commercial project. It is being shared in case useful to others, and as a contribution to the development community and the great GraphQL tools that already exist. The original implementation did just enough to meet the goals and needs of the initial project.

Known Issues Include:

- Hasura views will break the code generation

## Refinements and Enhancements Needed

There are many refinements and enhancements that would be beneficial, and contributions to that end are encouraged. Notable examples include:

- Fix known issues
- Add validation (especially for checking for package prerequisites). See [these docs](https://graphql-code-generator.com/docs/custom-codegen/validate-configuration)
- Rewrite the plugins to use the graphql-code-generator [recommended Visitor pattern](https://graphql-code-generator.com/docs/custom-codegen/using-visitor)

## Notes

This is development is not affiliated with either the [graphql-code-generator](https://graphql-code-generator.com/) team, the [Hasura](https://hasura.io/) team, or the [Apollo GraphQL](https://www.apollographql.com/) team.
