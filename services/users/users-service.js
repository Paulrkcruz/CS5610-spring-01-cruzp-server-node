const usersDao = require("../../daos/users-dao")

const register = (newUser, res) => {
    return usersDao.findUserByUsername(newUser.username)
        .then((existUser) => {
            if(existUser) {
                res.send(403)
            } else {
                return usersDao.createUser(newUser);
            }
        })
}

const login = (credentials) => {
    return usersDao.findUserByCredentials(credentials)
        .then((user) => {
            return user
        })
}

const createUser = (user) => {
    return usersDao.createUser(user);
}

const findAllUsers = () => {
    return usersDao.findAllUsers();
}


module.exports = {
    register, login, createUser, findAllUsers
}