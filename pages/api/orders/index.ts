import Order from '../../../models/Order';
import connectDB from '../../../utils/databaseConnection';

const handler = async (req: any, res: any) => {
  const { method } = req;

  await connectDB();

  if (method === 'GET') {
    try {
      const orders = await Order.find();
      res.status(200).json(orders);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === 'POST') {
    try {
      const order = await Order.create(req.body);
      res.status(201).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

export default handler;
