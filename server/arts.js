'use strict'
const express = require("express");
let router = express.Router()
const MongoClient = require('mongodb').MongoClient
const connectionString = "mongodb+srv://sara:sara1234@artatheart.2mnug.mongodb.net/ArtAtHeart?retryWrites=true&w=majority"
let arts;
let db;

//=======connect to DB========

MongoClient.connect(connectionString, { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected')
    db = client.db('ArtAtHeart')
    arts = db.collection('arts')
})

//=======POST add new art========


router.post('/', (req, res) => {
    arts.findOne({ artName: req.body.artName })
        .then(result => {
            if (result) {
                res.status(400).send("art name exists")
            } else {
                if (req.body != undefined) {
                    if (req.body.artName != '' && req.body.artist != '' && req.body.price > 0) {
                        const types = ["abstractArt", "modernArt", "drawings", "TangibleArt", "Photography", "paintings"]
                        if (types.indexOf(req.body.type) > -1) {
                            if (req.body.img.startsWith("data:image/jpeg;base64")) {
                                let newArt = {
                                    "id": req.body.id,
                                    artName: req.body.artName,
                                    price: req.body.price,
                                    type: req.body.type,
                                    artist: req.body.artist,
                                    img: req.body.img,
                                    ifBought: 0
                                }
                                arts.insertOne(newArt)
                                    .then(() => {
                                        return res.send("ok")
                                    }).catch(err => console.error(err))
                            } else { res.status(400).send("bad request") }

                        } else { res.status(400).send("bad request") }
                    } else { res.status(400).send("bad request") }
                } else { res.status(400).send("bad request") }
            }
        })
})

//=======GET - art names========

router.get('/details', (req, res) => {
    arts.aggregate([{ $project: { _id: 0, id: 1, artName: 1 } }])
        .toArray().then((array) => {
            res.send(array)
        })
})

//=======GET - arts by artists========

router.get('/artist', (req, res) => {
    let artist1=req.headers['content']
    if (artist1==="\"All Artists\"") {
        arts.find().toArray()
            .then((array) => {
                res.send(array)
            })
    }
    let artists = ["\"Van Gogh\"", "\"Pablo Picasso\"", "\"Robert Loft\"", "\"Daniel Sader\""];
    if (artists.indexOf(artist1) > -1) {
        let currArtist=artist1.substring(1, artist1.length-1);
        arts.find({"artist":currArtist})
        .toArray().then((array)=>{
                res.send(array)
        })
        
    }
})

//=======GET - arts by art types========

router.get('/types',(req,res)=>{
    let type1=req.headers['content']
    let types = ["\"abstractArt\"", "\"drawings\"", "\"modernArt\"", "\"TangibleArt\"","\"Photography\"", "\"paintings\""];
    if(types.indexOf(type1)>-1){
        let currType=type1.substring(1,type1.length-1)
        arts.find({"type":currType})
        .toArray().then((array)=>{
            res.send(array)
        })
    }
})

//=======GET - all items========

router.get('/', (req, res) => {
    arts.find().toArray()
        .then((array) => {
            res.send(array)
        })
})
//=======UPDATE - when item is bought========

router.put('/', (req, res) => {
    arts.findOne({ artName: req.body.artName }).then(
        result => {
            if (result) {
                if (req.body != undefined) {
                    if (req.body.artName != '' && req.body.artist != '' && req.body.price > 0) {
                        const types = ["abstractArt", "modernArt", "drawings", "TangibleArt", "Photography", "paintings"]
                        if (types.indexOf(req.body.type) > -1) {
                            if (req.body.img.startsWith("data:image/jpeg;base64")) {
                                arts.findOneAndUpdate({ "id": req.body.id }, { $set: req.body }, { upsert: true })
                                    .then(() => {
                                        return res.send("ok")
                                    }).catch(err => console.error(err))
                            } else { res.status(400).send("bad request") }

                        } else { res.status(400).send("bad request") }
                    } else { res.status(400).send("bad request") }
                } else { res.status(400).send("bad request") }
            } else { res.status(400).send("bad request") }
        }
    )
})


module.exports = router;
