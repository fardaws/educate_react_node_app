const express = require('express')
const router = express.Router();

const path = require('path');
const multer = require('multer');
//config type de media pour l'aspet securité des fichiers recu
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
    // destination  // l fichier eli jey ml FE win bech nsobou
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    //file name // pour rendre tous nom unique
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' + extension;
        cb(null, imgName);
    }
});
const Event = require('../models/event');
//add event
router.post('/', multer({ storage: storage }).single('img'), async (req, res) => {
    console.log("here add event");
    let url = req.protocol + "://" + req.get('host');
    try {
        // const newEvent = new Event(req.body);
        const newEvent = new Event({
            idTeacher: req.body.idTeacher,
            name: req.body.name,
            date: req.body.date,
            desc: req.body.desc,
            img: url + "/images/" + req.file.filename
        })
        const event = await newEvent.save((err, result) => {
            if (result) {
                res.status(200).json({
                    event: result
                })
            } else {
                console.log(Object.keys(err.keyPattern));
                res.status(200).json({
                    message: `${Object.keys(err.keyPattern)} must be unique`
                })
            }
        })
    } catch (error) {
        console.log("error == ", error);
    }
})
//show all events
router.get('/', async (req, res) => {
    console.log("here into show all events");
    try {
        const events = await Event.find();
        if (events) {
            res.status(200).json(events);
        } else {
            console.log(err);
        }
    } catch (error) {
        console.log("error == ", error);
    }
})
//get events by id 
router.get('/:id', async (req, res) => {
    console.log("here into get event");
    try {
        const event = await Event.findById(req.params.id);
        if (event) {
            res.status(200).json(event)
        } else {
            res.status(200).json("event not found!")
        }
    } catch (error) {
        console.log(error);
    }
})
//edit event 
router.put('/:id', async (req, res) => {
    console.log("here into edit event");
    try {
        const event = await Event.findById(req.params.id);
        await event.updateOne({ $set: req.body });
        res.status(200).json("event updated")
    } catch (error) {
        console.log(error);
    }
})
//delete event 
router.delete('/:id', async (req, res) => {
    console.log("here into delete event");
    try {
        await Event.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json("event deleted")
    } catch (error) {
        console.log(error);
    }
})
//get all teacher events 
router.get('/teacher/:id', async (req, res) => {
    console.log("here into get all teacher events ");
    try {
        const events = await Event.find({ idTeacher: req.params.id })
        if (events) {
            res.status(200).json(events)
        } else {
            res.status(200).json("aucun event")
        }
    } catch (error) {
        console.log(error);
    }
})
module.exports = router; 