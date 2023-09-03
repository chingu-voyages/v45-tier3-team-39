const router = require('express').Router();

const {
  createdCategory,
  deleteCategory,
  updateCategory,
  getAllCategory,
} = require('../controllers/categoryController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').post(protect, admin, createdCategory).get(getAllCategory);
router
  .route('/:id')
  .put(protect, admin, updateCategory)
  .delete(protect, admin, deleteCategory);

export default router;
