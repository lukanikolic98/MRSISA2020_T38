const {Pacient} = require("../models")

module.exports = {
    async register (req, res) {
        try{
            const pacient = await Pacient.create(req.body)
            console.log("\nSuccesfilly added user ")
            res.send(pacient.toJSON())
        } catch (error) {
            res.status(400).send({
                error: "An error encountered while trying to create patient"
            })
            console.log("\nErrror!!!!!!!!!!!: " + error)
        }
    }
}