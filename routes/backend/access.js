import { Router } from 'express';
import * as accessController from '../../app/Http/Controllers/Backend/access';
import AuthMiddleware from '../../app/Http/Middleware/auth';

const routes = new Router();

routes.post('/register', accessController.signup);
routes.post('/login', AuthMiddleware.login, accessController.login);

export default routes;
