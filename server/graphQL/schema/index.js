const { buildSchema } = require('graphql');
const { Types } = require('./types');
const { Inputs } = require('./inputs');
const { Queries } = require('./queries');
const { Mutations } = require('./mutations');
const { SchemaDefinition } = require('./schemaDefinition');

module.exports = buildSchema(`
  ${Types}
  ${Inputs}
  ${Queries}
  ${Mutations}
  ${SchemaDefinition}
`);
