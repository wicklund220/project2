const Equipment = require('../models').Equipment;
const Users = require('../models').Users;
const Attachment = require('../models').Attachment;

const index = (req, res) => {
    Equipment.findAll({
        order: [
            ['division']
        ]
    })
    .then(foundEquipment => {
        res.render('index.ejs', {
            equipment: foundEquipment
        })
    })
}

module.exports = {
    index
}