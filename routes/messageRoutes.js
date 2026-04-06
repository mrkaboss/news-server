import express from "express";
import { sendMessage, getMyMessages } from "../controllers/messageController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/send", protect(), sendMessage);
router.get("/my-inbox", protect(), getMyMessages);

export default router;