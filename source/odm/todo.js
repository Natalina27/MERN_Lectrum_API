// Core
import mongoose from 'mongoose';

// Document shape
const schema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    favorite: {
        type: Boolean,
        required: true,
        default: false,
    },
    completed: {
        type: Boolean,
        required: true,
        default: false,
    }
}, { timestamps: {createdAt: 'created', updatedAt: 'modified'}});

// {
//     message: 'My task',
//     favorite: false,
//     completed: false,
//     created: 'Date',
//     modified: 'Data'
// }

// Collection
export const todo = mongoose.model('todos', schema);
