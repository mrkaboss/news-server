import express from "express";
import { connect } from "../controllers/contactController.js";

const router = express.Router();

router.post("/send", connect);

export default router;