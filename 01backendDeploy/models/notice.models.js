import mongoose, {Schema} from "mongoose";


const noticeSchema = new Schema( {
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    image: {
        type: String,//cloudinary url
    },
},
{
    timestamps: true
})

export const Notice = mongoose.model('Notice', noticeSchema)