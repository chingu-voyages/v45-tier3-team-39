const router = require('express').Router();

import {
  createdMenu,
  updateMenu,
  getAllMenu,
  getOneMenu,
  deleteMenu,
} from '../controllers/menuController';
import { protect, admin } from '../middleware/authMiddleware';

router.route('/').post(createdMenu).get(getAllMenu);
router
  .route('/:id')
  .put(protect, admin, updateMenu)
  .delete(deleteMenu)
  .get(getOneMenu);

export default router;
