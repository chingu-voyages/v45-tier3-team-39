import { Request, Response } from 'express';
import Restaurant from '../models/Restaurant';

//create a new restaurant

export const createRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurant = await Restaurant.create({
      name: req.body.name,
      img_url: req.body.image,
      numberOfTables: req.body.tables,
    });
    res.status(201).json({
      success: true,
      message: 'Restaurant created successfully',
      restaurant,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create restaurant',
    });
  }
};

//fetcH all the restaurants

export const getAllRestaurants = async (_req: Request, res: Response) => {
  try {
    const restaurants = await Restaurant.find();

    if (!restaurants || !restaurants.length) {
      res.status(404).json({
        success: false,
        message: 'No restaurants found',
      });
    }

    res.status(200).json({
      success: true,
      restaurants,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch all restaurants',
    });
  }
};

//fetch an individual restaurant

export const getRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurantId = req.params.restaurantId;
    const restaurant = await Restaurant.findById(restaurantId);

    if (!restaurant) {
      res.status(404).json({
        success: false,
        message: 'Restaurant not found',
      });
    }

    res.status(200).json({
      success: true,
      restaurant,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch restaurant',
    });
  }
};

//update an individual restaurant

export const updateRestaurant = async (req: Request, res: Response) => {
  const restaurantId = req.params.restaurantId;

  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      restaurantId,
      {
        name: req.body.name,
        img_url: req.body.image,
        numberOfTables: req.body.tables,
      },
      { new: true }
    );

    if (!updatedRestaurant) {
      res.status(404).json({
        success: false,
        message: 'Restaurant not found',
      });
    }

    res.status(201).json({
      success: true,
      message: 'Restaurant updated successfully',
      updatedRestaurant,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to update restaurant',
    });
  }
};
