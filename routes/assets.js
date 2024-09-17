let express = require('express');
let router = express.Router();


let AssetsController = require("../Controller/Asset")
let UserController = require("../Controller/User")

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
})

const upload = multer({ storage: storage })


//SIGN UP
router.post('/create', upload.array("photos", 20), UserController.secure, AssetsController.AssetCreate);

//ALL DATA FIND
router.get('/find', UserController.secure, AssetsController.FindData);

//FIND ONE
router.get('/findid/:id', UserController.secure, AssetsController.FindId);

//DELETE DATA
router.delete('/delete/:id', UserController.secure, AssetsController.AssetDelete);


//UPDATE DATA
router.patch('/update/:id', upload.array('photos', 20), UserController.secure, AssetsController.AssetUpdate);


module.exports = router;


