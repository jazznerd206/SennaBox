const models = require('../models'); // loads index.js
const bcrypt = require('bcrypt');

module.exports = {
    findAll: (req, res) => {
        models.User.findAll()
            .then(users => {
                res.send(users);
              })
            .catch(err => {
                res.status(500).send({
                    message:
                    err.message || 'Some error occurred while retrieving users'
                });
        });
    },
    findOne: (req, res) => {
        models.User.findOne(
            { where: {
                email: req.body.email
            }
        })
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || 'Some error occurred while retrieving user'
            });
        })
    },
    create: (req, res) => {
        if(!req.body.username || !req.body.password) {
            res.status(400).send({ error:true, message: 'Please provide name/pass' });
        }
        let hash = bcrypt.hashSync(req.body.password, 10);
        models.User.findOne( { where: { username: req.body.username }})
        .then(user => {
            if (user) {
                console.log(`user found, choose a different name ${user}`)
                return res.json({
                    success: false,
                    username: null,
                    error: `Username ${req.body.username} has already been taken.`
                })
            }
            else {
                console.log(`no user found, ready to create`)
                try {
                    // create a new user with the password hash from bcrypt
                    let user = models.User.create(
                      Object.assign(req.body, { password: hash })
                    );
                
                    // data will be an object with the user and it's authToken
                    let data = user.authorize();
                
                    // send back the new user and auth token to the
                    // client { user, authToken }
                    return res.json(user);
                
                    } catch(err) {
                        return res.status(400).send(err);
                }
                
            }
        })
        .catch (err => {
            console.log(err)
        })
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
    login: (req, res) => {
        const { username, password } = req.body;

        // if the username / password is missing, we use status code 400
        // indicating a bad request was made and send back a message
        if (!username || !password) {
            return res.status(400).send(
            'Request missing username or password param'
            );
        }

        try {
            let user = models.User.authenticate(username, password)

            user = user.authorize();

            return res.json(user);

        } catch (err) {
            return res.status(400).send('invalid username or password');
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