// let rpio = require('rpio');
const models = require('../models'); // loads index.js

module.exports = {
    findAll: (req, res) => {
        console.log('box find all route')
        models.Box.findAll().then(box => {
                console.log("find all")
                res.send(box);
            })
            .catch(err => {
                console.log("find all")
                const response = {
                    status: 500,
                    message:
                    err.message || 'Some error occurred while retrieving box'
                }
                res.json(response);
        });
    },
    create: async (req, res) => {
        console.log('box create route ', req.body)
        const { boxName, plantType, userId } = req.body;
        const newBox = {
            boxName: boxName,
            plantType: plantType,
            UserId: userId
        }
        console.log('newBox', newBox)
        let create = await models.Box.create(newBox);
        // console.log(create)
        res.send(create)
    },
    read: (req, res) => {
        console.log('read')
    },
    update: (req, res) => {
        console.log('box update route ', req.params.id, req.body)
    },
    destroy: (req, res) => {
        console.log('box delete route ', req.params.id)
    }
}