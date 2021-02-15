// let rpio = require('rpio');

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
        // rpio.open(15, rpio.INPUT);
        // res.send('Pin 15 is currently ' + (rpio.read(15) ? 'high' : 'low'));
        // rpio.open(16, rpio.OUTPUT, rpio.LOW);
        // for (var i = 0; i < 5; i++) {
        //     /* On for 1 second */
        //     rpio.write(16, rpio.HIGH);
        //     rpio.sleep(1);
            
        //     console.log(rpio.read(16))
        //     /* Off for half a second (500ms) */
        //     rpio.write(16, rpio.LOW);
        //     rpio.msleep(500);
        //     console.log(rpio.read(16))
        // }
    },
    update: (req, res) => {
        console.log('box update route ', req.params.id, req.body)
    },
    destroy: (req, res) => {
        console.log('box delete route ', req.params.id)
    }
}