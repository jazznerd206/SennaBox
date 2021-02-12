module.exports = {
    findAll: (req, res) => {
        console.log('this is the first route test -- GET /api/box\nwill be get all plant boxes')
        res.send('this is the first route test -- GET /api/box\nwill be get all plant boxes') 
    }
}