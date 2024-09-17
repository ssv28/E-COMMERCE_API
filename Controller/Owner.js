let Ownership = require('../Models/owner');

exports.OwnerCreate = async function (req, res, next) {
    try {

        let OwnerCreate = await Ownership.create(req.body)

        res.status(200).json({
            status: "Success",
            message: "Owner Create SuccessFully!",
            data: OwnerCreate

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

        let ownerFind = await Ownership.find().populate("asset").populate("owner")


        res.status(200).json({
            status: "Success",
            message: "Owner Found SuccessFully!",
            data: ownerFind

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

        let ownerFind = await Ownership.findById(req.params.id)
        if(!ownerFind) throw new Error ("Owner not found!")

        res.status(200).json({
            status: "Success",
            message: "Owner Find SuccessFully!",
            data: ownerFind

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.OwnerDelete = async function (req, res, next) {
    try {

        await Ownership.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Owner Delete SuccessFully!",
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.OwnerUpdate = async function (req, res, next) {
    try {

        console.log("===>>>", req.body);

        let OwnerUpdate = await Ownership.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if(!OwnerUpdate) throw new Error ("Owner not found!")


        console.log(req.params.id);
        console.log("~~~~~~>>>>", req.body);

        console.log(">>>>>", OwnerUpdate);

        res.status(200).json({
            status: "Success",
            message: "Owner Update SuccessFully!",
            data: OwnerUpdate
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

