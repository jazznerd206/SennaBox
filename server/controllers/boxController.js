module.exports = {
    findAll: (req, res) => {
        console.log('box find all route')
        let randNum = (Math.random() * 100).toFixed(2);
        res.send(randNum);
    },
    create: (req, res) => {
        console.log('box create route ', req.body)
    },
    read: (req, res) => {
        console.log('box read route ', req.params.id)
    },
    update: (req, res) => {
        console.log('box update route ', req.params.id, req.body)
    },
    destroy: (req, res) => {
        console.log('box delete route ', req.params.id)
    }
}