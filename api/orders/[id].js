// const { get } = require("../airtable");

/** This is just a sample api path to demonstrate on Vercel we can call it
 * 
 * I might use it...I might not.  Idk.
 */
module.exports = (req, res) => {
    console.log('req received: ', req.query)
    const {
        query: { name, id, cost },
    } = req;

    // const order = 
    // await get('Orders', id);
    // console.log('order found: ', order)
    // res.send(`Recipe ${name}`);
    res.send({ order: { name, id, cost } })
}