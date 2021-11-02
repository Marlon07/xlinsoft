import express from 'express';
import { fetchVentas, addVentas, updateVentas, removeVentas } from '../services/ventas.service.js';
const router = express.Router();

router.get('/', (req, resp, next) => {
  fetchVentas(req.query)
    .then(ventas => resp.json(ventas))
    .catch(next);
});

router.post('/add', (req, resp, next) => {
  addVentas(req.body)
    .then(ventas => resp.status(200).json(ventas))
    .catch(next);
});

router.put('/update/:id', (req, resp, next) => {
  const { params: { id }, body} = req;
  updateVentas(id, body)
    .then(ventas => resp.status(201).json(ventas))
    .catch(next);
});

router.delete('/remove/:id', (req, resp, next) => {
  const { params: { id } } = req;
  removeVentas(id)
    .then(ventas => resp.json(ventas))
    .catch(next);
});

export default router;
