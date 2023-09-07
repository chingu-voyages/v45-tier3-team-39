const router = require('express').Router();

import {
  createdCategory,
  deleteCategory,
  updateCategory,
  getAllCategory,
  getOneCategory,
} from '../controllers/categoryController';
import { protect, admin } from '../middleware/authMiddleware';

router.route('/').post(protect, admin, createdCategory).get(getAllCategory);
router
  .route('/:id')
  .put(protect, admin, updateCategory)
  .delete(protect, admin, deleteCategory)
  .get(getOneCategory);

export default router;
