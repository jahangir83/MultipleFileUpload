

 

const Employer = require('../model/Employee')
const { response } = require('express')


// Create router 

// show the list of employer
const index = (req, res, next) => {
    Employer.find()
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                massage:"An error Occurend"
            })
        })
}

const show = (req, res, next) => {
    let employerID = req.body.employerID
    Employer.findById(employerID)
        .then(response => {
            res.json({
            response
            })
        })
        .catch(error => {
            res.json({
            massage:"An Error occured"
        })
    })
}
//added new employer
const store = (req, res, next) => {
    let employer = new Employer({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age
    })
/*
    //the sigle file uplod condition
    if (req.file) {
        employer.avatar = req.file.path
    }
    */
    
    // this multipule file upload conditions
    if (req.files) {
        let path = ''
        req.files.forEach(function (files, index, arr) {
            path = path + files.path + ','
        })
        path = path.substring(0, path.lastIndexOf(","))
        employer.avatar = path
      
    }

    employer.save()
        .then(response => {
             res.json({
                 massage: "data save succesfully" ,
                 response
        })
        })
        .catch(error => {
            res.json({
            massage:"your data not save"
        })
    })
}

// update data
const update = (req, res, next) => {
    let employerID = req.body.employerID

    let updateData = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age:req.body.age
    }

    Employer.findByIdAndUpdate(employerID, { $set: updateData })
        .then(() => {
            res.json({
            massage:"Employer Update successfully"
        })
        })
        .catch(error => {
            res.json({
            massage:"Update data not update"
        })
    })
}
//Remode date
const remove = (req, res, next) => { 
    let employerID = req.body.employerID
    Employer.findByIdAndRemove(employerID)
        .then(() => {
            res.json({
            massage:"Employer Delet Successfully"
        })
        })
        .catch(error => {
            res.json({
            massage:"Delet not data"
        })
    })
}

module.exports = {
    index, show, store, update, remove
}