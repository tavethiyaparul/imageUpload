const express = require('express')
const app = express();
const path = require("path")
const multer = require('multer')
require("./connect")
const Stud = require("./model/studImage")

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './Image')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '--' + file.originalname)
    }
})

const upload = multer({ storage: fileStorage })

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.post("/single", upload.single("image"), async (req, res) => {
    console.log(req.file);
    try {
        const stud = new Stud({
            name: req.body.name,
            image: req.file.path
        })
        const data = await stud.save()
        res.json({ message: "single file upload successfully....", data })
    } catch (error) {
        console.log("erroe", error);
    }
})

app.post("/multiple", upload.array("image", 3), async (req, res) => {

    try {
        const imageFile = req.files
        let p = []
        imageFile.map((e) => {
            return p.push(e.path)
        })
        // or
        // for (const element of imageFile) {
        //      p.push(element.path)
        // }

        console.log("p", p);
        const stud = new Stud({
            name: req.body.name,
            image: p
        })
        const data = await stud.save()
        res.json({ message: "multiple file upload successfully....", data })
    } catch (error) {
        console.log("error", error);
    }
})

app.listen(5000)