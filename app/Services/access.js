import AuthModel from '../Models/auth';

class AccessService {
  register({ email, password, username }) {
    if (!email) {
      throw new Error('Email is required');
    } else if (!password) {
      throw new Error('Password is required');
    } else if (!username) {
      throw new Error('Username is required');
    }

    try {
      return AuthModel.create({ email, password, username });
    } catch (error) {
      throw error;
    }
  }
}

export default new AccessService();
