import Product from '../../../models/Product';
import connectDB from '../../../utils/databaseConnection';

export default async function handler(req: any, res: any) {
  const {
    method,
    query: { id },
    cookies,
  } = req;
  //const token = cookies.token;

  connectDB();

  if (method === 'GET') {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //   if (method === 'PUT') {
  //     if (!token || token !== process.env.token) {
  //       return res.status(401).json('Not authenticated!');
  //     }
  //     try {
  //       const product = await Product.findByIdAndUpdate(id, req.body, {
  //         new: true,
  //       });
  //       res.status(200).json(product);
  //     } catch (err) {
  //       res.status(500).json(err);
  //     }
  //   }

  //   if (method === 'DELETE') {
  //     if (!token || token !== process.env.token) {
  //       return res.status(401).json('Not authenticated!');
  //     }
  //     try {
  //       await Product.findByIdAndDelete(id);
  //       res.status(200).json('The product has been deleted!');
  //     } catch (err) {
  //       res.status(500).json(err);
  //     }
  //   }
}
