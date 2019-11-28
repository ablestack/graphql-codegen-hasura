/* eslint-disable no-undef */
module.exports = {
  client: {
    excludes: ['src/@global/**/*'],
    service: {
      name: 'csee',
      localSchemaFile: './schema/graphql.schema.json',
    },
  },
};
