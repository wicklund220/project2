const Users = require('../models').Users;
const Equipment = require('../models').Equipment;
const UserEquipment = require('../models').userEquipment;

const index = (req, res) => {
    res.render('users/index.ejs')
}

const renderSignUp = (req, res) => {
    dumbyUser = {
        name: '',
        username: ''
    }, Equipment.findAll()
    .then (allEquip => {
        res.render('users/signup.ejs', {
            users: dumbyUser,
            msg: '',
            equipment: allEquip
        })
    })
}


const renderLogIn = (req, res) => {
    dumbyUser = {
        name: '',
        username: ''
    }
    res. render('users/login.ejs', {
        users: dumbyUser,
        msg: ''
    })
}

const newUser = (req, res) => {
    if (!req.body.username || req.body.username === '') {
        res.render('users/signup.ejs', {
            msg: 'Please enter valid username',
            users: req.body
        })
    }
    if(!req.body.password || req.body.password === '') {
        res.render('users/signup.ejs', {
            msg: 'Password required',
            users: req.body
        })
    }
    Users.create(req.body, {
        include: [Equipment]
    })
    .then(newUser => {
        if (typeof(req.body.equipment) === "string"){
            Equipment.findByPk(req.body.equipment)
            .then(foundEquipment => {
                    newUser.addEquipment(foundEquipment);
                    res.redirect(`/users/profile/${newUser.id}`)
                })
        } 
        else {
            for(let i = 0; i < req.body.equipment.length; i++) {
                Equipment.findByPk(req.body.equipment[i])
                .then(foundEquipment => {
                        newUser.addEquipment(foundEquipment);
                        res.redirect(`/users/profile/${newUser.id}`)
                    })
            }
        }
    })
    .catch(error => {
        if(error.name === 'SequelizeUniqueConstraintError') {
            res.render('users/signup.ejs', {
                msg: 'Username taken',
                users: req.body
            })
        } else {
            res.send('An unknown error occurred');
        }
    })
}

const profile = (req, res) => {
    Users.findByPk(req.params.index, {
        include: [Equipment]
    })
    .then(foundUser => {
        res.render('users/profile.ejs', {
            users: foundUser
        })
    })
}

const userLogIn = (req, res) => {
    if(!req.body.username || req.body.username === '') {
        res.render('users/login.ejs', {
            msg: 'Username required',
            user: req.body
        })
    }  
    if(!req.body.password || req.body.password === '') {
        res.render('users/login.ejs', {
            msg: 'Password required',
            user: req.body
        })
    }
    Users.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    })
    .then((foundUser) => {
        if (!foundUser) {
            res.render('users/login.ejs', {
                msg: 'incorrect username/password'
            })
        }
        res.redirect(`/users/profile/${foundUser.id}`)
    })
}

const renderEdit = (req, res) => {
    Users.findByPk(req.params.index, {
        include: [Equipment]
    })
    .then(editUser => { 
        Equipment.findAll()
        .then(allEquipment => {
            res.render('users/edit.ejs', {
                users: editUser,
                equipment: allEquipment
            })
        })
    })
}

const editUser = (req, res) => {
    Users.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
    .then(updatedUser => {
        if (typeof(req.body.equipment) === "string"){
            Equipment.findByPk(req.body.equipment)
                .then(foundEquipment => {
                    Users.findByPk(req.params.index)
                    .then(foundUser => {console.log(foundUser)
                        foundUser.addEquipment(foundEquipment);
                        res.redirect(`/users/profile/${foundUser.id}/edit`)
                    })
                })
            }
        else if (typeof(req.body.equipment) === "object"){
            for(let i = 0; i < req.body.equipment.length; i++) {
                Equipment.findByPk(req.body.equipment[i])
                .then(foundEquipment => {
                    Users.findByPk(req.params.index)
                    .then(foundUser => {console.log(foundUser)
                        foundUser.addEquipment(foundEquipment);
                        res.redirect(`/users/profile/${foundUser.id}/edit`)
                    })
                })
            }
        } else { 
                    Equipment.findByPk(req.body.equipment)
                    .then(foundEquipment => {
                        Users.findByPk(req.params.index)
                        .then(foundUser => {
                            foundUser.addEquipment(foundEquipment);
                            res.redirect(`/users/profile/${foundUser.id}/edit`)
                        })
                    })
                }
            })

        }

const deleteProfile = (req, res) => {
    Users.destroy({
        where: {id: req.params.index}
    })
    .then(() => {
        res.redirect('/users')
    })
}

const removeEquipment = (req, res) => {    
    UserEquipment.destroy({
        where: {user_id: req.params.user_id, 
            equipment_id: req.params.equipment_id}
    })
    .then(() => {
        res.redirect(`/users/profile/${req.params.user_id}/edit`)
    })
}

const opUser = (req, res) => {
    Users.findAll( {
        order: ['description'],
        include: [Equipment]
    })
    .then(foundUsers => {
        Equipment.findAll()
        .then(foundEquipment => {
            res.render('users/op_index.ejs', {
                users: foundUsers,
                equipment: foundEquipment 
            })
        })
    })
}

module.exports = {
    index,
    renderSignUp,
    renderLogIn,
    newUser,
    profile,
    userLogIn,
    renderEdit,
    editUser,
    deleteProfile,
    removeEquipment,
    opUser
}