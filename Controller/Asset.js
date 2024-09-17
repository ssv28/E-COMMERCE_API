let Asset = require('../Models/asset');

exports.AssetCreate = async function (req, res, next) {
    try {
        console.log("Files uploaded:", req.files); 

        if (!req.files || req.files.length === 0) {
            throw new Error('Images upload failed');
        }

        req.body.photos = req.files.map(file => file.filename);

        let AssetCreate = await Asset.create(req.body);

        res.status(200).json({
            status: "Success",
            message: "Asset created successfully!",
            data: AssetCreate
        });
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        });
    }
};


exports.FindData = async function (req, res, next) {
    try {

        let assetsFind = await Asset.find()


        res.status(200).json({
            status: "Success",
            message: "Assets Found SuccessFully!",
            data: assetsFind

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

        let assetsFind = await Asset.findById(req.params.id)
        if(!assetsFind) throw new Error ("Owner not found!")

        res.status(200).json({
            status: "Success",
            message: "Assets Find SuccessFully!",
            data: assetsFind

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.AssetDelete = async function (req, res, next) {
    try {

        await Asset.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Asset Delete SuccessFully!",
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.AssetUpdate = async function (req, res, next) {
    try {

        if (!req.files || req.files.length === 0) {
            throw new Error('Images upload failed');
        }

        req.body.photos = req.files.map(file => file.filename);

        let updatedAsset = await Asset.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if(!updatedAsset) throw new Error ("Asset not found!")

        console.log(">>>>>", updatedAsset);

        res.status(200).json({
            status: "Success",
            message: "Asset Update SuccessFully!",
            data: updatedAsset
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

