const express = require('express')
const DVDRoute = express.Router()
const DVD = require('../models/DVD')
DVDRoute.route('/addDVD').post((req, res, next) => {
    DVD.create(req.body, (error, data) => {
        if (error) {
            console.log(error)
        } else {
            res.json(data)
        }
    })
});




DVDRoute.route('/getDVDs').get((req, res) => {
    DVD.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


DVDRoute.route('/getDVD/:id').get((req, res) => {
    DVD.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
DVDRoute.route('/updateDVD/:id').put((req, res, next) => {
    DVD.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
            console.log('Data updated successfully')
        }
    })
})





DVDRoute.route('/deleteDVD/:id').delete((req, res, next) => {
    DVD.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})



module.exports = DVDRoute;