// const { get } = require("../airtable");

module.exports = (req, res) => {
    console.log('req received: ', req.query)
    const {
        query: { name, id, cost },
    } = req;

    // const order = 
    // await get('Orders', id);
    // console.log('order found: ', order)
    // res.send(`Order ${name}`);
    res.send({ order: { name, id, cost } })
}