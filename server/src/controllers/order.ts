import Order from '../models/Order';
import { Request, Response } from 'express';

//create a new Order

export const createNewOrder = async (req: Request, res: Response) => {
  try {
    const { table, items, status } = req.body;

    const totalPrice = items.reduce((acc: number, item: any) => {
      return acc + item.price * item.quantity;
    }, 0);

    const order = new Order({
      table: table,
      items: items,
      orderStatus: status || 'Not prepared',
      totalPrice: totalPrice,
    });

    await order.save();

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      order,
    });
  } catch (err: any) {
    res.status(500).json({
      err: err.message,
      success: false,
      message: 'Failed to create order',
    });
  }
};

// get all orders

export const getAllOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await Order.find();

    if (!orders || !orders.length) {
      res.status(404).json({
        success: false,
        message: 'No order found',
      });
    }

    res.status(200).json({
      success: true,
      orders,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch orders',
    });
  }
};

//get single order

export const getSingleOrder = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId);

    if (!order) {
      res.status(404).json({
        success: false,
        message: 'Order not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      order,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch the order',
    });
  }
};

//update order status

export const updateOrderStatus = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.orderId;
    const newStatus = req.body.status;

    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { orderStatus: newStatus },
      { new: true }
    );

    if (!updatedOrder) {
      res.status(404).json({
        success: false,
        message: 'Order not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      order: updatedOrder,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Failed to update the order status',
    });
  }
};

//delete order

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const orderId = req.params.orderId;
    const deletedOrder = await Order.findByIdAndRemove(orderId);

    if (!deletedOrder) {
      res.status(404).json({
        success: false,
        message: 'Order not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Order deleted successfully',
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete the order',
    });
  }
};
