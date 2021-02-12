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
        // console.log('this is the first route test -- GET /api/user\nwill be get all users')
        // res.send('this is the first route test -- GET /api/user\nwill be get all users') 
    }
}