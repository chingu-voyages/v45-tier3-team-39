import { Document, Schema, model } from 'mongoose';

interface IRestaurant extends Document {
  name: string;
  img_url: string;
  numberOfTables: number;
  createdAt: Date;
}

const restaurantSchema = new Schema<IRestaurant>({
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

const Restaurant = model<IRestaurant>('Restaurant', restaurantSchema);

export default Restaurant;
