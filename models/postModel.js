const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        tags: {
            type: [String],
            default: []
        }
    },
    {
        timestamps: true
    }
);

const postModel = mongoose.model('Post', postSchema);
module.exports = postModel;