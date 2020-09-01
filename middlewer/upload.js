

const fs = require('fs')
const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cd) {
        var dir = './uploads'
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir)
        }
        cd(null, dir)
    },
    filename: function (req, file, cd) {
        let ext = path.extname(file.originalname)
        cd(null, Date.now() + ext)
    }
})


var upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (
            file.mimetype == 'image/png' ||
            file.mimetype == 'image/jpg' ||
            file.mimetype == 'image/jpeg'
        ) {
            callback(null, true)
        } else {
            console.log("Only jpg & png & jpeg file supported!")
            callback(null, false)
        }
    },
    limits: {
        fileSize: 2048 * 2048 * 4
    }
})

module.exports = upload