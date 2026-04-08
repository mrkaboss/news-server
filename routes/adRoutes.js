import express from "express";
import { createAd, getAds } from "../controllers/adController.js";

const router = express.Router();

router.post("/create", createAd);
router.get("/all", getAds);

export default router;