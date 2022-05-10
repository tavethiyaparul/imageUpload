// const express = require('express')
// const app = express();
// const path = require("path")
// const multer = require('multer')
// const fileStorage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'./Images')
//     },
//     filename:(req,file,cb)=>{
//         cb(null,Date.now() + '--' + file.originalname)
//     }
// })
// const upload = multer({storage:fileStorage})

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"index.html"))
// })

// app.post("/single",upload.single("image"),(req,res)=>{
//     console.log(req.file);
//     res.send("single file upload successfully....")
// })

// app.post("/multiple",upload.array("image",3),(req,res)=>{
//     console.log(req.files);
//    res.send("multiple file upload successfully..");
// })

// app.listen(5000)