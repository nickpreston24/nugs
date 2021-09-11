module.exports = (req, res) => {
    console.log('req received: ', req.query)
    const {
        query: { name, id, cost },
    } = req;

    // res.send(`Order ${name}`);
    res.send({ order: { name, id, cost} })
}