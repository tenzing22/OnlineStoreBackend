const multer = require('multer')
const fs = require('fs')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let fileDestination = 'public/uploads/'
        //check if directory exists
        if (!fs.existsSync(fileDestination)) {
            fs.mkdirSync(fileDestination, { recursive: true })
            //recursive:true means it creates parent folder as well as sub folder
            cb(null, fileDestination)
        }
        else {
            cb(null, fileDestination)
        }
        // /public/uploads/abc_fulldate.jpg

    },
    filename: (req, file, cb) => {
        let filename = path.basename(file.originalname, path.extname(file.originalname))
        //path.basename(folder/abc.jpg)
        //return abc.jpg
        //path.basename(folder/abc.jpg,.jpg)
        //return abc
        let ext = path.extname(file.originalname)
        cb(null, filename + '_' + Date.now() + ext)
        // abc_fulldate.jpg


    }

})

let imageFilter = (req, file, cb) => {
    if (file == null) {
        return cb(new Error('Please choose a file to upload'), false)
    }

    if (!file.originalname.match(/\.(jpg|png|gif|jpeg|svg|JPG|PNG|GIF|JPEG|SVG|jfif)$/)) {
        return cb(new Error('You can upload image file only'), false)

    }
    else {
        cb(null, true)
    }
}

let upload = multer({
    storage: storage,
    fileFilter: imageFilter,
    limits: {
        fileSize: 2048000 //2MB
    }
})

module.exports = upload