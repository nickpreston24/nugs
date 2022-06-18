module.exports = (request, response) {
    const { name } = request.query;
    res.send(`Hello ${name}!`);
}