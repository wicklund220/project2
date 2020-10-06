const Users = require('../models').Users;
const Equipment = require('../models').Equipment;

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
        Equipment.findByPk(req.body.equipment)
        .then(foundEquipment => {
            // Users.findByPk(req.params.index)
            // .then(foundUser =>{
                newUser.addEquipment(foundEquipment);
                res.redirect(`/users/profile/${newUser.id}`)
            })
        // })
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
        Equipment.findByPk(req.body.equipment)
        .then(foundEquipment => {
            Users.findByPk(req.params.index)
            .then(foundUser => {
                foundUser.addEquipment(foundEquipment);
                res.redirect(`/users/profile/${req.params.index}`)
            })
        })
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

module.exports = {
    index,
    renderSignUp,
    renderLogIn,
    newUser,
    profile,
    userLogIn,
    renderEdit,
    editUser,
    deleteProfile
}