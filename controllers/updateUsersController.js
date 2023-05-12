const UpdateForUser = require('../models/UpdateForUser');

const updateUsers = async (req, res) => {
    if (!req?.body?.name || !req?.body?.mobile || !req?.body?.mail) {
        res.status(400).json({ "message": "Missing fields" });
        return;
    }
    const name = req.body.name;
    const mail = req.body.mail;
    const mobile = req.body.mobile;

    const alreadyUser = await UpdateForUser.findOne({ mobile }).exec();
    if (alreadyUser) {
        res.status(409).json({ "message": "you have already been subscribed" });
        return;
    }
    try {
        const result = await UpdateForUser.create({
            name,
            mail,
            mobile
        });
        console.log(result);
        res.sendStatus(201);
    }
    catch (err){
        res.status(500).send(err);
    }
}
module.exports = updateUsers