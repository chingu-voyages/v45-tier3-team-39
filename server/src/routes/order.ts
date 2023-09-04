import express from 'express';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware';
import {
  createNewOrder,
  getAllOrders,
  getSingleOrder,
  updateOrderStatus,
  deleteOrder,
} from '../controllers/order';

router.post('/', createNewOrder);
router.get('/', protect, admin, getAllOrders);
router.get('/:orderId', protect, admin, getSingleOrder);
router.put('/:orderId', protect, admin, updateOrderStatus);
router.delete('/:orderId', protect, admin, deleteOrder);

export default router;
