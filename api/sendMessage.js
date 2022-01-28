module.exports = (req, res) => {
    console.log('hi')
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({
        foo: "bar"
    })
}