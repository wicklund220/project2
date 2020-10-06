const Equipment = require('../models').Equipment;
const Users = require('../models').Users;
const Attachment = require('../models').Attachment;

const index = (req, res) => {
    Attachment.findAll({
        order: [
            ['division']
        ]
    })
    .then(foundAttachment => {
        res.render('att_index.ejs', {
            attachment: foundAttachment
        })
    })
}

const show = (req, res) => {
    Attachment.findByPk(req.params.index, {
            include: [Equipment]
        })
        .then(showAttachment => {
            Equipment.findAll()
            .then(foundEquipment =>{console.log(foundEquipment)
                res.render('att_show.ejs', {
                    equipment: foundEquipment,
                    attachment: showAttachment
                }) 
            })
        })
    }



//     Attachment.findByPk(req.params.index, {
//         include: [Equipment]
//     })
//     .then(showAttachment => {
//         res.render('att_show.ejs', {
//            attachment: showAttachment
//         })
//     })
// }

module.exports = {
    index,
    show
}