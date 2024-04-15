const mongoose = require('mongoose');

const ProblemSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title:{
        type: String,
        required: true
    },
    difficulty:{
        type: String,
        enum: ['easy', 'medium', 'hard'],
        required: true
    },
    question_url:{
        type: String,
        required: true
    },
    status:{
        type:String,
        enum:['pending', 'solved', 'revision'],
        required: true
    },
    solution_url:{
        type: String,
    },
    description:{
        type: String,
        required: true
    },
    created_at:{
        type: Date,
        default: Date.now
    },
    updated_at:{
        type: Date,
        default: Date.now
    }
})