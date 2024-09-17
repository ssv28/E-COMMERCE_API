let express = require('express');
let router = express.Router();

let OwnerController = require("../Controller/Owner")
let UserController = require("../Controller/User")

//SIGN UP
router.post('/create', UserController.secure, OwnerController.OwnerCreate);

//ALL DATA FIND
router.get('/find', UserController.secure, OwnerController.FindData);

//FIND ONE
router.get('/findid/:id', UserController.secure, OwnerController.FindId);


//DELETE DATA
router.delete('/delete/:id', UserController.secure, OwnerController.OwnerDelete);


//UPDATE DATA
router.patch('/update/:id', UserController.secure, OwnerController.OwnerUpdate);


module.exports = router;


