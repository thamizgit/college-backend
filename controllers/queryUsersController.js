const QueryUsers = require('../models/QueryUsers');
const addQuery = async (req, res) => {
    if (!req?.body?.email || !req?.body?.query) {
        return res.status(404).json({ "message": "missing data" });
    }
    try {
        const duplicate = await QueryUsers.findOne({ email: req.body.email }).exec();
        if (duplicate) {
            return res.status(409).json({ "message": "You have already queried" });
        }
        if (req.body.name) {
            const result = await QueryUsers.create({
                name: req.body.name,
                email: req.body.email,
                query: req.body.query
            });
            res.status(201).json({ "name": req.body.name });
            console.log(result);
        }
        else {
            const result = await QueryUsers.create({
                email: req.body.email,
                query: req.body.query
            });
            console.log(result);
            res.status(201).json({ "message": "user created" });
        }
    }
    catch (err) {
        res.status(500).json({ "message": "no server response" });
    }
}
module.exports = addQuery;