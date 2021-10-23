const { gql, ApolloServer } = require("apollo-server");
const { Neo4jGraphQL } = require("@neo4j/graphql");
const neo4j = require("neo4j-driver");

// const config = require("../../src/config")
// console.log('config :>> ', config);
const cfg = require("dotenv").config();
console.log('cfg :>> ', cfg);


const typeDefs = gql`
  type Manufacturer {
    name: String!
    rounds: [Round] @relationship(type: "MAKES", direction: OUT)
  }

  type Round {
    name: String!
    caliber: String!
    Manufacturers: [Manufacturer] @relationship(type: "MAKES", direction: IN)
  }
`;

const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
);

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

const server = new ApolloServer({
  schema: neoSchema.schema,
});

server.listen().then(({ url }) => {
  console.log(`GraphQL server ready on ${url}`);
});
























const getManufacturerRoundsQuery = `match(m:Manufacturer)-[:MAKES]-(rounds) where m.name = "Underwood Ammunition" return m, rounds `;

