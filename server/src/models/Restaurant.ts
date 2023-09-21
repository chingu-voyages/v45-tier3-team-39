import { Schema, model } from 'mongoose';
import { Restaurant } from '../../types/dist/Restaurant';

const restaurantSchema = new Schema<Restaurant>({
  name: {
    type: 'string',
    required: true,
  },
  img_url: {
    type: 'string',
    required: true,
  },
  numberOfTables: {
    type: 'number',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Restaurant = model('Restaurant', restaurantSchema);

export default Restaurant;
