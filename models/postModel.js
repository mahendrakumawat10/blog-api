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

<<<<<<< HEAD
 
=======
>>>>>>> 34ebe1765697f7481654c26ea7dc67c93ff974ec
