import { Router } from 'express';
import apiRoutes from './api';

const routes = new Router();

routes.use('/api/v1', apiRoutes);
export default routes;
