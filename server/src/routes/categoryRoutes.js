const router = require('express').Router();

import {
  createdCategory,
  deleteCategory,
  updateCategory,
  getAllCategory,
  getOneCategory,
} from '../controllers/categoryController';
// import { protect, admin } from '../middleware/authMiddleware';

router.route('/').post(createdCategory).get(getAllCategory);
router
  .route('/:id')
  .put(updateCategory)
  .delete(deleteCategory)
  .get(getOneCategory);

export default router;
