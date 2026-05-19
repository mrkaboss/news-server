import express from 'express';
import { deleteNewsAdmin, applyCopyrightStrike, handleUserViolation } from '../controllers/adminController.js';
import { isAdmin } from '../middleware/authMiddleware.js'; 

const router = express.Router();


router.delete('/news/:id', isAdmin, deleteNewsAdmin);
router.post('/admin/copyright-strike', isAdmin, applyCopyrightStrike);
router.post('/admin/user-violation', isAdmin, handleUserViolation);

export default router;