const express = require('express')
const userRoute = express.Router()
const User = require('../models/User')

userRoute.route('/addUser').post((req, res, next) => {
    User.create(req.body, (error, data) => {
        if (error) {
            console.log(error)
        } else {
            res.json(data)
        }
    })
});





userRoute.route('/getUsers').get((req, res) => {
    User.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
userRoute.route('/getUser/:id').get((req, res) => {
    User.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})






userRoute.route('/updateUser/:id').put((req, res, next) => {
    User.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data)
            console.log('Data updated successfully')
        }
    })
})






userRoute.route('/deleteUser/:id').delete((req, res, next) => {
    User.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = userRoute