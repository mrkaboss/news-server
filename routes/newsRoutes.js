import express from "express";
import { protect, isAdmin } from "../middleware/authMiddleware.js";
import { getNews, createNews, getMyNews } from "../controllers/newsController.js";
import { deleteNews } from "../controllers/deleteNews.js";

const router = express.Router();

router.get("/", getNews);
router.post("/", protect(), createNews);           
router.get("/my-news", protect(), getMyNews);      
router.delete("/:id", protect(["admin"]), deleteNews);

export default router;