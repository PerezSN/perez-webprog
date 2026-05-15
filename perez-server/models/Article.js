const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    image: {
        type: String,
        default: ''
    },
    content: {
        type: [String],
        default: []
    },
    paragraphs: {
        type: [String],
        default: []
    }
}, { timestamps: true });

module.exports = mongoose.model('Article', articleSchema);
