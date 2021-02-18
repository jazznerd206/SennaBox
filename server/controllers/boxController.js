// let rpio = require('rpio');
const models = require('../models'); // loads index.js

module.exports = {
    findAll: (req, res) => {
        console.log('box find all route')
        let randNum = (Math.random() * 100).toFixed(2);
        res.send(randNum);
    },
    create: async (req, res) => {
        console.log('box create route ', req.body)
        // let newBox = await models.Box.create(req.body);
        const { boxName, plantType, userId } = req.body;
        const newBox = {
            boxName: boxName,
            plantType: plantType,
            userId: userId
        }
        console.log('newBox', newBox)
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