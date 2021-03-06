import Order from '../../../models/Order';
import connectDB from '../../../utils/databaseConnection';

const handler = async (req: any, res: any) => {
  const {
    method,
    query: { id },
  } = req;

  await connectDB();

  if (method === 'GET') {
    try {
      const order = await Order.findById(id);
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === 'PUT') {
    try {
      const order = await Order.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === 'DELETE') {
  }
};

export default handler;
