const models = require('../models'); // loads index.js

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
    create: (req, res ) => {
        if(!req.body.username || !req.body.password) {
            res.status(400).send({ error:true, message: 'Please provide name/pass' });
        }
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
                models.User.create(req.body).then(user => {
                    return res.json({
                        success: true,
                        username: user.username,
                    })
                })
                .catch(error => {
                        console.log(error);
                })
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
    }
}