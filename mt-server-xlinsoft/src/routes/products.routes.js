import express from 'express';
import { fetchProducts, addProduct, updateProduct, removeProduct } from '../services/products.service.js';
const router = express.Router();

router.get('/', (req, resp, next) => {
  fetchProducts(req.query)
    .then(products => resp.json(products))
    .catch(next);
});

router.post('/add', (req, resp, next) => {
  addProduct(req.body)
    .then(products => resp.status(200).json(products))
    .catch(next);
});

router.put('/update/:id', (req, resp, next) => {
  const { params: { id }, body} = req;
  updateProduct(id, body)
    .then(products => resp.status(201).json(products))
    .catch(next);
});

router.delete('/remove/:id', (req, resp, next) => {
  const { params: { id } } = req;
  removeProduct(id)
    .then(products => resp.json(products))
    .catch(next);
});

export default router;
