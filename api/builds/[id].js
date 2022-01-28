modules.exports = (req, res) => {
    // console.log('req :>> ', req);

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
        }
    }))

}