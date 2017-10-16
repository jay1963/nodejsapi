import { Router } from 'express';
import * as authController from '../../app/Http/Controllers/Api/auth';
import AuthMiddleware from '../../app/Http/Middleware/auth';

const routes = new Router();

routes.post('/register', authController.signup);
routes.post('/login', AuthMiddleware.login, authController.login);

export default routes;
