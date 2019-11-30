# Overview

graphql-codegen-hasura is a collection of code generator plugins for [graphql-code-generator](https://graphql-code-generator.com/). These plugins are designed to automate some coding tasks around the development of a strongly typed [Hasura](https://hasura.io/) backend with an [Apollo GraphQL](https://www.apollographql.com/) React client.

These plugins require and augment the existing fantastic GraphQL code generator plugins available from [graphql-code-generator](https://graphql-code-generator.com/)

- The **graphql-codegen-hasura-gql-from-schema** plugin generates [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) gql fragments, mutations and queries for every _Table_ defined in the Hasura database
- The **graphql-codegen-hasura-typescript-from-schema** plugin generates [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) TypeScript helper methods for every _Table_ defined in the Hasura database.
- The **graphql-codegen-hasura-typescript-from-documents** plugin generates [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) TypeScript helper methods for every _Fragment_ defined in the targeted (code) documents.

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
    yarn add graphql-codegen-hasura-gql-from-schema graphql-codegen-hasura-typescript-from-schema graphql-codegen-hasura-typescript-from-documents
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
- fragmentImportFrom: import path to the gql fragment generated code. Only required if withFragments:false
- trimString: optional string to trim from each type name. Useful for trimming Hasura prepended schema name
- withFragments: boolean flag for fragment gql code generation
- withQueries: boolean flag for query gql code generation
- withInserts: boolean flag for insert gql code generation
- withUpdates: boolean flag for update gql code generation
- withDeletes: boolean flag for delete gql code generation

### graphql-codegen-hasura-typescript-schema plugin

- reactApolloVersion (2 | 3, default value: 3): sets the version of react-apollo
- primaryCodegenTypeScriptImportPath: import path to the code generated with dependent @graphql-codegen/typescript generated code
- trimString: optional string to trim from each type name. Useful for trimming Hasura prepended schema name
- withQueries: boolean flag for query TypeScript code generation
- withInserts: boolean flag for insert TypeScript code generation
- withUpdates: boolean flag for update TypeScript code generation
- withDeletes: boolean flag for delete TypeScript code generation

### graphql-codegen-hasura-typescript-documents plugin

- reactApolloVersion (2 | 3, default value: 3): sets the version of react-apollo
- primaryCodegenTypeScriptImportPath: import path to the code generated with dependent @graphql-codegen/typescript generated code
- trimString: optional string to trim from each type name. Useful for trimming Hasura prepended schema name
- withQueries: boolean flag for query TypeScript code generation
- withInserts: boolean flag for insert TypeScript code generation
- withUpdates: boolean flag for update TypeScript code generation
- withDeletes: boolean flag for delete TypeScript code generation

## Plugin Details

### graphql-codegen-hasura-gql-from-schema plugin

#### Overview

Generates gql fragments, mutations and queries for every _Table_ defined in the Hasura database.

See [demo/src/autogen/hasura/gql.ts](https://github.com/ahrnee/graphql-codegen-hasura/tree/master/demo/src/autogen/hasura) for generated output files.

#### Example Output for `User` Entity

```typescript
// users GQL
//------------------------------------------------

// Scalar Fields Fragment
//

export const UsersModelFields = gql`
  fragment UsersModelFields on users {
    created_at
    id
    name
  }
`;

// Mutation: Insert
//

const INSERT_USERS_MODEL = gql`
  mutation insertUsersModel($objects: [users_insert_input!]!, $onConflict: users_on_conflict) {
    insert_users(objects: $objects, on_conflict: $onConflict) {
      affected_rows
      returning {
        ...UsersModelFields
      }
    }
  }
  ${UsersModelFields}
`;

// Query: FetchById
//

const FETCH_USERS_MODEL_BYID = gql`
  query fetchUsersModelById($usersId: Int!) {
    users_by_pk(id: $usersId) {
      ...UsersModelFields
    }
  }
  ${UsersModelFields}
`;

// Query: Fetch
//

const FETCH_USERS_MODELS = gql`
  query fetchUsersModel($distinct_on: [users_select_column!], $where: users_bool_exp, $limit: Int, $offset: Int, $order_by: [users_order_by!]) {
    users(distinct_on: $distinct_on, where: $where, limit: $limit, offset: $offset, order_by: $order_by) {
      ...UsersModelFields
    }
  }
  ${UsersModelFields}
`;

// Mutation: Update by Id
//

const UPDATE_USERS_MODEL_BYID = gql`
  mutation updateUsersModelById($id: Int, $set: users_set_input) {
    update_users(_set: $set, where: { id: { _eq: $id } }) {
      affected_rows
      returning {
        ...UsersModelFields
      }
    }
  }
  ${UsersModelFields}
`;

// Mutation: Update
//

const UPDATE_USERS_MODELS = gql`
  mutation updateUsersModel($set: users_set_input, $where: users_bool_exp!) {
    update_users(_set: $set, where: $where) {
      affected_rows
      returning {
        ...UsersModelFields
      }
    }
  }
  ${UsersModelFields}
`;

// Mutation: Remove by Id
//

const REMOVE_USERS_MODEL_BYID = gql`
  mutation removeUsersModelById($id: Int) {
    delete_users(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
  ${UsersModelFields}
`;

// Mutation: Remove
//

const REMOVE_USERS_MODELS = gql`
  mutation removeUsersModel($where: users_bool_exp!) {
    delete_users(where: $where) {
      affected_rows
    }
  }
  ${UsersModelFields}
`;
```

### graphql-codegen-hasura-typescript-from-schema plugin

#### Overview

Generates [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) TypeScript helper methods for every _Table_ defined in the Hasura database

The existing [@graphql-codegen/typescript-react-apollo](https://graphql-code-generator.com/docs/plugins/typescript-react-apollo) plugin already provides this capability for hooks. This plugin extends that to direct client.query & client.mutate calls, in addition to adding some convenience features.

See [demo/src/autogen/hasura/typescript.ts](https://github.com/ahrnee/graphql-codegen-hasura/tree/master/demo/src/autogen/hasura) for generated output files.

#### Example Output for `User` Entity

```typescript
// users Helpers
//------------------------------------------------

// Insert Helper
//

export async function insertUsersModel(
  apolloClient: ApolloClient<object>,
  usersId: string,
  mutationOptions: Omit<MutationOptions<InsertUsersModelMutation, InsertUsersModelMutationVariables>, "mutation">
): Promise<{ result: FetchResult<InsertUsersModelMutation>; returning: (UsersModelFieldsFragment | null | undefined)[] | null | undefined }> {
  const result = await apolloClient.mutate<InsertUsersModelMutation, InsertUsersModelMutationVariables>({ mutation: InsertUsersModelDocument, ...mutationOptions });

  const returning = result && result.data && result.data.insert_users && result.data.insert_users!.returning;

  return { result, returning };
}

// Fetch Helper
//

export async function fetchUsersModelById(apolloClient: ApolloClient<object>, usersId: string): Promise<UsersModelFieldsFragment | null | undefined> {
  const usersResult = await apolloClient.query<FetchUsersModelByIdQuery>({ query: FetchUsersModelByIdDocument, variables: { id: usersId } });
  return usersResult.data.users_by_pk;
}

export async function fetchUsersModel(
  apolloClient: ApolloClient<object>,
  usersId: string,
  queryOptions: Omit<QueryOptions<FetchUsersModelQueryVariables>, "query">
): Promise<UsersModelFieldsFragment[] | null | undefined> {
  const usersResult = await apolloClient.query<FetchUsersModelQuery>({ query: FetchUsersModelDocument, ...queryOptions });
  return usersResult.data.users;
}

// Update Helper
//

export async function updateUsersModelById(
  apolloClient: ApolloClient<object>,
  usersId: number,
  set: Users_Set_Input,
  mutationOptions: Omit<MutationOptions<UpdateUsersModelByIdMutation, UpdateUsersModelByIdMutationVariables>, "mutation">
): Promise<{ result: FetchResult<UpdateUsersModelByIdMutation>; returning: (UsersModelFieldsFragment | null | undefined)[] | null | undefined }> {
  const result = await apolloClient.mutate<UpdateUsersModelByIdMutation, UpdateUsersModelByIdMutationVariables>({
    mutation: UpdateUsersModelByIdDocument,
    variables: { id: usersId, set },
    ...mutationOptions
  });

  const returning = result && result.data && result.data.update_users && result.data.update_users!.returning;

  return { result, returning };
}

export async function updateUsersModel(
  apolloClient: ApolloClient<object>,
  mutationOptions: Omit<MutationOptions<UpdateUsersModelMutation, UpdateUsersModelMutationVariables>, "mutation">
): Promise<{ result: FetchResult<UpdateUsersModelMutation>; returning: (UsersModelFieldsFragment | null | undefined)[] | null | undefined }> {
  const result = await apolloClient.mutate<UpdateUsersModelMutation, UpdateUsersModelMutationVariables>({ mutation: UpdateUsersModelDocument, ...mutationOptions });

  const returning = result && result.data && result.data.update_users && result.data.update_users!.returning;

  return { result, returning };
}

// Delete Helper
//

export async function removeUsersModelById(
  apolloClient: ApolloClient<object>,
  usersId: number,
  mutationOptions: Omit<MutationOptions<RemoveUsersModelByIdMutation, RemoveUsersModelByIdMutationVariables>, "mutation">
): Promise<{ result: FetchResult<RemoveUsersModelByIdMutation>; returning: number | null | undefined }> {
  const result = await apolloClient.mutate<RemoveUsersModelByIdMutation, RemoveUsersModelByIdMutationVariables>({
    mutation: RemoveUsersModelByIdDocument,
    variables: { id: usersId },
    ...mutationOptions
  });

  const returning = result && result.data && result.data.delete_users && result.data.delete_users!.affected_rows;

  return { result, returning };
}

export async function removeUsersModel(
  apolloClient: ApolloClient<object>,
  mutationOptions: Omit<MutationOptions<RemoveUsersModelMutation, RemoveUsersModelMutationVariables>, "mutation">
): Promise<{ result: FetchResult<RemoveUsersModelMutation>; returning: number | null | undefined }> {
  const result = await apolloClient.mutate<RemoveUsersModelMutation, RemoveUsersModelMutationVariables>({ mutation: RemoveUsersModelDocument, ...mutationOptions });

  const returning = result && result.data && result.data.delete_users && result.data.delete_users!.affected_rows;

  return { result, returning };
}
```

### graphql-codegen-hasura-typescript-from-documents plugin

#### Overview

Generates [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) TypeScript helper methods for every _Fragment_ defined in the targeted (code) documents.

The existing [@graphql-codegen/typescript-react-apollo](https://graphql-code-generator.com/docs/plugins/typescript-react-apollo) plugin already provides this capability for hooks. This plugin extends that to direct client.query & client.mutate calls, in addition to adding some convenience features.

See [demo/src/autogen/hasura/typescript.ts](https://github.com/ahrnee/graphql-codegen-hasura/tree/master/demo/src/autogen/hasura) for generated output files.

#### Example Output for `User` Entity

This has the same output as the [graphql-codegen-hasura-typescript-from-documents](#graphql-codegen-hasura-typescript-from-schema-plugin) plugin

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

- Hasura views will break the code generation

## Refinements and Enhancements Needed

There are many refinements and enhancements that would be beneficial, and contributions to that end are encouraged. Notable examples include:

- Fix known issues
- Add validation (especially for checking for package prerequisites). See [these docs](https://graphql-code-generator.com/docs/custom-codegen/validate-configuration)
- Extend capabilities to facilitate codegen for multi-table queries and mutations. One implementation strategy is to perhaps generate gql and helper code from user-defined gql fragments. Will require some design work.
- Rewrite the plugins to use the graphql-code-generator [recommended Visitor pattern](https://graphql-code-generator.com/docs/custom-codegen/using-visitor)

## Notes

- This is development is not affiliated with either the [graphql-code-generator](https://graphql-code-generator.com/) team, the [Hasura](https://hasura.io/) team, or the [Apollo GraphQL](https://www.apollographql.com/) team.
- graphql-code-generator only picking up gql from 'graphql-tag' import, and not the newer '@apollo/client' import. The 'graphql-tag' import will continue to be used until this is addressed, even for react-apollo v3.
