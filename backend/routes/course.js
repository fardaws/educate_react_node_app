const express = require('express');
const router = express.Router();
const Course = require('../models/course');

const path = require('path');
const multer = require('multer');

const { body, validationResult } = require('express-validator');
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
//create course
router.post('/',
    multer({ storage: storage }).single('img'),
    body('name').isLength({ min: 5 }),
    async (req, res) => {
        console.log("here into add course");
        let url = req.protocol + "://" + req.get('host');
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(200).json({
                message: `${errors.array()[0].param} is ${errors.array()[0].msg}`
            });
        }
        try {
            // const newCourse = new Course(req.body);
            const newCourse = new Course({
                idTeacher: req.body.idTeacher,
                name: req.body.name,
                category: req.body.category,
                desc: req.body.desc,
                price: req.body.price,
                img: url + "/images/" + req.file.filename
            })
            const course = await newCourse.save((err, result) => {
                if (result) {
                    res.status(200).json({
                        message: "here course",
                        course: result
                    })
                } else {
                    console.log(err);
                }
            });

        } catch (error) {
            console.log("error in BE : ", error);
        }
    });
//get course by id 
router.get('/:id', async (req, res) => {
    console.log("here into get course by id");
    try {
        const course = await Course.findById(req.params.id);
        if (course) {
            res.status(200).json(course);
        } else {
            res.status(200).json({
                message: "course not found"
            });
        }
    } catch (error) {
        console.log("error", error);
    }
});
//get all courses
router.get('/', async (req, res) => {
    console.log("here into get all courses");
    try {
        const courses = await Course.find();
        if (courses) {
            res.status(200).json(courses)
        } else {
            res.status(200).json({
                message: "aucun course"
            })
        }
    } catch (error) {
        console.log("error", error);
    }
})
//edit course
router.put('/:id', async (req, res) => {
    console.log("here into edit course");
    let course = await Course.findById(req.params.id);
    try {
        // { $set: req.body }
        await course.updateOne({ $set: req.body });
        res.status(200).json('course updated');
    } catch (error) {
        console.log("error :", error);
    }
});
//delete course
router.delete('/:id', async (req, res) => {
    console.log("here into delete course");
    const course = await Course.findById(req.params.id);
    try {
        //{$set:req.body}
        await course.deleteOne({ _id: req.params.id });
        res.status(200).json("course deleted")
    } catch (error) {
        console.log("error", error);
    }
})
//get all teacher courses
router.get('/teacher/:id', async (req, res) => {
    console.log("here into teacher courses");
    const courses = await Course.find({ idTeacher: req.params.id })
    try {
        if (courses) {
            res.status(200).json(courses)
        } else {
            res.status(200).json("aucun course")
        }
    } catch (error) {
        console.log("error : ", error);
    }
})
module.exports = router; 
