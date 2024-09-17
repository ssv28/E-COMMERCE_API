const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assetSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    photos: [{
        type : String
    }],
    fileType: {
        type: String,
        enum: ['image', 'video', 'document', 'audio'],
        required: true
    },
   
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    metadata: {
        license: String,
        creationDate: Date,
        tags: [String]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Asset = mongoose.model('Asset', assetSchema);
module.exports = Asset
