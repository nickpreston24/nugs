
// fastify.route({
//   method: "DELETE",
//   url: '/api/nugs/:slug',
//   handler: async (request, reply) => {

//     let { slug } = request.params
//     slug = slug.replace(':', "").trim()
//     console.log(`slug`, slug)

//     const result = await session.run(
//       `match(n:Nug {name: $name, caliber: $caliber, msrp: $msrp})
//         detach delete n`, { name: slug })

//     console.log(`result`, result)
//   }
// })

modules.exports = (req, res) => {

    const {
        query: { name, id, cost },
    } = req;
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify({
        build: {
            name
            , id
            , cost
            , slug: "nug-slug-1"
        }
    }))

}