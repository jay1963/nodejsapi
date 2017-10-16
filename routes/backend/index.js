import { Router } from 'express';
import accessRoutes from './access';

const routes = new Router();

routes.use('/access', accessRoutes);

export default routes;
