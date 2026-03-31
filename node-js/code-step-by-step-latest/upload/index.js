const express = require('express');
const multer = require('multer');
const app = express()
const fs = require('fs');

const uploadDir = "upload";

// Ensure the upload directory exists
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, uploadDir)
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg");
        }
    })
}).single("user_file");

app.post("/upload", upload, (req, resp) => {
    resp.send("file upload")
})

app.listen(5000)