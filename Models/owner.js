const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ownershipSchema = new Schema({
    asset: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Asset',
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    ownershipDate: {
        type: Date,
        default: Date.now
    }
});

const Ownership = mongoose.model('Ownership', ownershipSchema);
module.exports = Ownership