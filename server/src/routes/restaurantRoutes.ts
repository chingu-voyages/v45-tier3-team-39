import express from 'express';
const router = express.Router();
import {
  createRestaurant,
  getRestaurant,
  getAllRestaurants,
  updateRestaurant,
} from '../controllers/restaurant';

router.post('/', createRestaurant);
router.get('/', getAllRestaurants);
router.get('/:restaurantId', getRestaurant);
router.patch('/:restaurantId', updateRestaurant);

export default router;
