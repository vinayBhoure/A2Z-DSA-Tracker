const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    image_url:{
        type: String,
    },
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    college:{
        type: String,
    },
    city:{
        type: String,
    },
    state:{
        type: String,
    },
    coding_url:[{
        platform:{
            type: String,
        },
        url:{
            type: String,
        }
    }],
    social_url:[{
        platform:{
            type: String,
        },
        url:{
            type: String,
        }
    }],
    created_at:{
        type: Date,
        default: Date.now
    },
    updated_at:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema);