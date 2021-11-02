import express from 'express';
import ProductsRoutes from './products.routes.js';
import UsersRoutes from './users.routes.js';
import VentasRoutes from './ventas.routes.js';
const router = express.Router();

router.get('/', (req, resp) => {
  resp.send('Connected to API');
});
router.use('/products', ProductsRoutes);
router.use('/users', UsersRoutes);
router.use('/ventas', VentasRoutes);

export default router;
