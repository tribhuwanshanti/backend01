import { Notice } from '../models/notice.models.js'
import { ApiError } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';


const addNotice = asyncHandler(async (req, res) => {

const {title, message} = req.body;

const existedNotice = await Notice.findOne({
    $or: [{ title }],
});

if (existedNotice) {
    throw new ApiError(409, "User with email or username already exists");
}

console.log(req.files);
let imageLocalPath;
    if (
        req.files &&
        Array.isArray(req.files.image) &&
        req.files.image.length > 0
    ) {
        imageLocalPath = req.files.image[0]['path'];
    }

    const image = await uploadOnCloudinary(imageLocalPath);

const notice = await Notice.create({
    title,
    message,
    image,
});

const createdNotice = await Notice.findById(notice._id).select();

console.log(createdNotice);
})


export { addNotice };