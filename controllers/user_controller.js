const user_service = require("../service/user_service")

class UserController {
    async GetUser(reg, res, next)
    {
        try {
            res.json(await user_service.GetAllUsers())
        } catch(e) {
            res.json({"error": "EXEPTION"})
        }
    }

    async AddUser(req, res, next)
    {
        try {
            res.json({"endpoint": "adduser"})
        } catch(e) {
            res.json({"error": "EXEPTION"}) 
        }
    }

    async DelUser(req, res, next)
    {
        try {
            res.json({"endpoint": "deluser"})
        } catch(e) {
            res.json({"error": "EXEPTION"}) 
        }
    }

    async UpdateUser(req, res, next)
    {
        try {
            res.json({"endpoint": "upduser"})
        } catch(e) {
            res.json({"error": "EXEPTION"}) 
        }
    }
}

module.exports = new UserController()