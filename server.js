// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

const dotenv = require('dotenv')
dotenv.config();
const dev = process.env.NODE_ENVIRONMENT === 'development'
const uri = process.env.VITE_VERCEL_URI
const user = process.env.VITE_VERCEL_USER
const password = process.env.VITE_VERCEL_PASSWORD
const neo4j = require('neo4j-driver')
const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))
const cors = require('fastify-cors');

fastify.register(cors, { origin: `http://localhost:${process.env.PORT}` })

fastify.route({
  method: "GET",
  url: '/api/nugs/:slug',
  handler: async (req, _) => {
    let { slug } = req.params
    slug = slug.replace(':', "").trim()
    const query = 'MATCH (n:Nug) RETURN n LIMIT 100';
    let stuff = await executeCypherQuery(query, { slug })

    console.log(`stuff`, stuff)
    return stuff;
    
    // let data = []; // Call neo4j here.
    // console.log(`data`, stuff.records)
    // let results = data[0]?.items?.find(i => i?.id.toString() === slug
    //   || i?.name?.includes(slug))
    // console.log(`result`, { results, slug })
    // return {
    //   itemsFound: results
    // }
  }
})

fastify.route({
  method: "DELETE",
  url: '/api/nugs/:slug',
  handler: async (request, reply) => {

    let { slug } = request.params
    slug = slug.replace(':', "").trim()
    console.log(`slug`, slug)

    const result = await session.run(
      `match(n:Nug {name: $name, caliber: $caliber, msrp: $msrp})
        detach delete n`, { name: slug })

    console.log(`result`, result)
  }
})

fastify.route({
  method: "POST",
  url: "/api/nugs/",
  handler: async (request, _) => {
    console.log('posting new nug...')
    // console.log(`request`, request)
    // console.log(`request.body`, request.body)
    try {
      const result = await session.run(
        'CREATE (a:Nug {name: $name, caliber: $caliber, msrp: $msrp}) RETURN a',
        {
          ...request.body
        }
      )

      const single = result.records[0];
      const node = single.get(0)

      console.log(`node`, node.properties.name)
    }
    finally {
      await session.close() //TODO: closing this causes an error for a new query.
    }
  }
})

//Execute Raw Queries here
async function executeCypherQuery(statement, params = {}) {
  try {
    let session = driver.session()
    const result = await session.run(statement, params);
    await session.close();
    return result;
  } catch (error) {
    throw error; // we are logging this error at the time of calling this method
  }
}

// Run the server!
const start = async () => {
  const PORT = process.env.PORT
  try {
    await fastify.listen(PORT || 3001)
  } catch (err) {
    await driver.close(); // close neo4j connection on failure.
    fastify.log.error(err)
    process.exit(1)
  }
}
start()