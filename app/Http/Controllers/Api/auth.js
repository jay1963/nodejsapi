import AuthService from '../../../Services/auth';

export const signup = async (req, res) => {
  try {
    const user = await AuthService.register(req.body);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: String(error) });
  }
};

export const login = async (req, res, next) => res.status(200).json(req.user.toAuthJSON());
