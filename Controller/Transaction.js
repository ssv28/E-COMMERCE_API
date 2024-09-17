let Transaction = require('../Models/transaction');

exports.TransactionCreate = async function (req, res, next) {
    try {

        let TransactionCreate = await Transaction.create(req.body)

        res.status(200).json({
            status: "Success",
            message: "Transaction Create SuccessFully!",
            data: TransactionCreate

        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.FindData = async function (req, res, next) {
    try {

        let transactionFind = await Transaction.find()
            .populate('asset')
            .populate('buyer')
            .populate('seller');


        res.status(200).json({
            status: "Success",
            message: "Transaction Found SuccessFully!",
            data: transactionFind

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.FindId = async function (req, res, next) {
    try {

        let transactionFind = await Transaction.findById(req.params.id)
        if (!transactionFind) throw new Error("Transaction not found!")

        res.status(200).json({
            status: "Success",
            message: "Transaction Find SuccessFully!",
            data: transactionFind

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.TransactionDelete = async function (req, res, next) {
    try {

        await Transaction.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Transaction Delete SuccessFully!",
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.TransactionUpdate = async function (req, res, next) {
    try {

        console.log("===>>>", req.body);

        let TransactionUpdate = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!TransactionUpdate) throw new Error("Transaction not found!")


        console.log(req.params.id);
        console.log("~~~~~~>>>>", req.body);

        console.log(">>>>>", TransactionUpdate);

        res.status(200).json({
            status: "Success",
            message: "Transaction Update SuccessFully!",
            data: TransactionUpdate
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

