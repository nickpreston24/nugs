module.exports = (req, res) => {
    const { name } = req.body;
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({
        foo: "bar",
        name
    })
}