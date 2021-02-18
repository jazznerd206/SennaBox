const models = require('../models'); // loads index.js
const bcrypt = require('bcryptjs');

module.exports = {
    findAll: (req, res) => {
        models.User.findAll(
            {
                include: [{
                    all: true,
                    nested: true
                  }]
                })
        .then(users => {
                console.log("find all")
                res.send(users);
              })
            .catch(err => {
                console.log("find all")
                const response = {
                    status: 500,
                    message:
                    err.message || 'Some error occurred while retrieving users'
                }
                res.json(response);
        });
    },
    findOne: (req, res) => {
        models.User.findOne(
            {
                where: {
                    id: req.params.id
                }, include: [{
                    all: true,
                    nested: true
                  }]
                })
        .then(user => {
            console.log('user', user)
            res.send(user)
        })
        .catch(err => {
            const response = {
                status: 400,
                message: 'Some error occurred while retrieving user'
            }
            res.json(response);
        })
    },
    create: async (req, res) => {
        if(!req.body.username || !req.body.password) {
            const response = {
                status: 400,
                message: 'All fields required'
            }
            res.json(response);
        }
        let hash = bcrypt.hashSync(req.body.password, 10);
        let findUser = await models.User.findOne( { where: { username: req.body.username }})
        console.log('find', findUser)
        if (findUser) {
            res.json({
                status: 400,
                message: 'Username not available'
            })
        }
        // create a new user with the password hash from bcrypt
        let userHash = models.User.create(
            Object.assign(req.body, { password: hash })
        );
        // data will be an object with the user and it's authToken
        // let data = user.authenticate();
        console.log('user', userHash)
        // send back the new user and auth token to the
        // client { user, authToken }
        // console.log('data', data)
        return res.json({
            status: 200,
            message: 'User created'
        });
    },
    update: (req, res) => {
        // update not yet necessary
    },
    destroy: (req, res) => {
        models.User.destroy({
            where: {
                id: req.params.userId
            }
        })
        .then(user => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.log(error);
        })
    },
    login: async (req, res) => {
        const { username, password } = req.body;

        // if the username / password is missing, we use status code 400
        // indicating a bad request was made and send back a message
        if (!username || !password) {
            const response = {
                status: 400,
                message: 'Please provide both name and password'
            }
            return res.json(response);
        }

        console.log('username', username)
        console.log('password', password)

        try {
            let user = await models.User.authenticate(username, password)
            // console.log('user in try block', user)
            return res.json(user);

        } catch (err) {
            console.log('invalid username or password')
            const response = {
                status: 400,
                message: 'Invalid username or password'
            }
            return res.json(response);
        }
    },
    logout: (req, res) => {
        // because the logout request needs to be send with
        // authorization we should have access to the user
        // on the req object, so we will try to find it and
        // call the model method logout
        const { user, cookies: { auth_token: authToken } } = req

        // we only want to attempt a logout if the user is
        // present in the req object, meaning it already
        // passed the authentication middleware. There is no reason
        // the authToken should be missing at this point, check anyway
        if (user && authToken) {
            req.user.logout(authToken);
            return res.status(204).send()
        }

        // if the user missing, the user is not logged in, hence we
        // use status code 400 indicating a bad request was made
        // and send back a message
        return res.status(400).send(
            { errors: [{ message: 'not authenticated' }] }
        );
    }
}