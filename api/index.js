module.exports = (req, res) => {
    res.status(200).json({
        body: req.body,
        query: req.query,
        cookies: req.cookies,
        message: "You are here"
    });
}