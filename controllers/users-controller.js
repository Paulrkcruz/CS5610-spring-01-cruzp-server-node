const usersService = require("../services/users/users-service")

module.exports = (app) => {

    const register = (req, res) => {
        const user = req.body;
        usersService.register(user, res)
            .then((actualUser) => {
                req.session["currentUser"] = actualUser;
                res.send(actualUser)
        })
    }

    const login = (req, res) => {
        const credentials = req.body;
        usersService.login(credentials)
            .then((user) => {
                if (user) {
                   req.session["currentUser"] = user;
                   res.send(user)
                } else {
                    res.send(403)
                }
            })
    }

    const profile = (req, res) => {
        const currentUser = req.session["currentUser"];
        res.send(currentUser)
    }

    const createUser = (req, res) => {
        const newUser = req.body;
        const currentUser = req.session["currentUser"];
        if(currentUser && currentUser.role === "ADMIN") {
            usersService.createUser(newUser)
        } else {
            res.send(403)
        }
    }

    const findAllUsers = (req, res) => {
        usersService.findAllUsers()
            .then((users) => res.send(users))
    }

    app.post("/api/register", register);
    app.post("/api/login", login);
    app.post("/api/profile", profile);
    app.post("/api/users", createUser);
    app.get("/api/users", findAllUsers)
}