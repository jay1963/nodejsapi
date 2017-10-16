import { authLocal, authJwt } from './passport';

class AuthMiddleware {
  login(req, res, next) {
    return authLocal(req, res, next);
  }
  authToken(req, res, next) {
    return authJwt(req, res, next);
  }
}

export default new AuthMiddleware();
