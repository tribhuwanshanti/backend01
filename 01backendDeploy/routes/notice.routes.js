import { Router } from "express";
import { addNotice } from "../controller/notice.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();

router.route("/add").post(
    upload.fields([
        {
            name: "image",
            maxCount: 1
        }
    ]),
    addNotice
)


export default router;