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
router.get('/', getAllOrders);
router.get('/:orderId', protect, admin, getSingleOrder);
router.put('/:orderId', updateOrderStatus);
router.delete('/:orderId', deleteOrder);

export default router;
