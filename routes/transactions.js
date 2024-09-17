let express = require('express');
let router = express.Router();

let TransactionController = require("../Controller/Transaction")
let UserController = require("../Controller/User")

//SIGN UP
router.post('/create', UserController.secure, TransactionController.TransactionCreate);

//ALL DATA FIND
router.get('/find', UserController.secure, TransactionController.FindData);

//FIND ONE
router.get('/findid/:id', UserController.secure, TransactionController.FindId);


//DELETE DATA
router.delete('/delete/:id', UserController.secure, TransactionController.TransactionDelete);


//UPDATE DATA
router.patch('/update/:id', UserController.secure, TransactionController.TransactionUpdate);


module.exports = router;


