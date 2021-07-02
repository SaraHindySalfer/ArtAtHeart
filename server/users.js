'use strict'
let validateValues = require('./validations')
const express = require("express");
let router = express.Router()
const MongoClient = require('mongodb').MongoClient
const connectionString = "mongodb+srv://sara:sara1234@artatheart.2mnug.mongodb.net/ArtAtHeart?retryWrites=true&w=majority"
let users;
let db;

//=======connect to DB========

MongoClient.connect(connectionString, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected')
    db = client.db('ArtAtHeart')
    users = db.collection('users')
})


//=======GET - login========

router.get('/', (req, res) => {
    users.find().toArray()
        .then((array) => {
            res.send(array)
        }).catch(err => console.error(err))
})

//=======GET - users========

router.get('/details', (req, res) => {
    users.aggregate([{ $project: { _id: 0, id: 1, email: 1 } }])
        .toArray().then((array) => {
            res.send(array)
        })
})

//=======POST signup========

router.post('/', (req, res) => {
    users.findOne({ email: req.body.email })
        .then(result => {
            if (result) {
                res.status(400).send("email exists")
            } else {
                if (req.body != undefined) {
                    let validateEmail = validateValues.EmailAddressValidation;
                    let validateName = validateValues.NameValidation
                    let validatePswd = validateValues.passwordValidation
                    if (validateEmail(req.body.email) == "") {
                        if (validateName(req.body.name) == "") {
                            if (validatePswd(req.body.password) == "") {
                                let newUser = {
                                    "id": req.body.id,
                                    email: req.body.email,
                                    name: req.body.name,
                                    password: req.body.password
                                }
                                users.insertOne(newUser).then(res.send("ok"))
                            } else (res.status(400).send(validatePswd(req.body.password)))
                        } else (res.status(400).send(validateName(req.body.name)))
                    } else (res.status(400).send(validateEmail(req.body.email)))
                } else { res.status(400).send("bad request") }
            }
        })

})

//=======POST login========

router.post('/loginDetails', (req, res) => {
    users.findOne({ email: req.body.email, password: req.body.password })
        .then((user) => {
            if(user==null){
                return res.end({"error":"email and password do not match"})
            }
            if (user) {
                return res.send(user)
            }
        })
})
module.exports = router;