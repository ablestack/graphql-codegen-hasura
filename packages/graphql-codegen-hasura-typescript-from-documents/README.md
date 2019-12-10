# graphql-codegen-hasura-typescript-from-documents

## Summary

When used in conjunction with [graphql-code-generator](https://graphql-code-generator.com/), this plugin will automatically generate [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) TypeScript helper methods for every _Fragment_ defined in the targeted (code) documents. Every scalar field in each table is included in the fragments.

graphql-codegen-hasura-typescript-from-documents is a code generator plugin for [graphql-code-generator](https://graphql-code-generator.com/) designed to automate some coding tasks around the development of a strongly typed [Hasura](https://hasura.io/) backend with an [Apollo GraphQL](https://www.apollographql.com/) React client.

## Instructions

See the associated [graphql-codegen-hasura GitHub repo](https://github.com/ahrnee/graphql-codegen-hasura) for usage and configuration information.

## Motivation

[Hasura](https://hasura.io/) is a fantastic tool for the rapid development of a GraphQL backend. [Apollo GraphQL](https://www.apollographql.com/) is a suite of GraphQL tooling, including a great Client. [graphql-code-generator](https://graphql-code-generator.com/) is a fantastic code generation tool and library, to automate the generation of much of the boilerplate code required to use GraphQL. However, there still remained quite a bit of boiler plate code to be written.

The consistency and predictability of the Hasura](https://hasura.io/) GQL backend implementation, provided an opportunity to automate much of the remaining code for standard single-table mutations and queries, and multi-table helper code. This plugin is an attempt to do some of that.

## Disclaimers

This code was initially developed for use in a single separate commercial project. It is being shared in case useful to others, and as a contribution to the development community and the great GraphQL tools that already exist. The original implementation did just enough to meet the goals and needs of the initial project. There are many refinements and enhancements that would be beneficial - and contributions to that end are encouraged. See the associated [graphql-codegen-hasura GitHub repo](https://github.com/ahrnee/graphql-codegen-hasura) for additional information.

## Note

This is development is not affiliated with either the [graphql-code-generator](https://graphql-code-generator.com/) team, the [Hasura](https://hasura.io/) team, or the [Apollo GraphQL](https://www.apollographql.com/) team.
