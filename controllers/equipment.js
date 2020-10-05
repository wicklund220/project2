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

const show = (req, res) => {
    Equipment.findByPk(req.params.index, {
        include: [Users]
    })
    .then(showEquipment => {
        res.render('eq_show.ejs', {
            equipment: showEquipment
        })
    })
}

module.exports = {
    index,
    show
}