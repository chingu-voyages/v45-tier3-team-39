const router = require('express').Router();

import {
  createdMenu,
  updateMenu,
  getAllMenu,
  getOneMenu,
  deleteMenu,
} from '../controllers/menuController';
import { protect, admin } from '../middleware/authMiddleware';

router.route('/').post(protect, admin, createdMenu).get(getAllMenu);
router
  .route('/:id')
  .put(protect, admin, updateMenu)
  .delete(protect, admin, deleteMenu)
  .get(getOneMenu);

export default router;
