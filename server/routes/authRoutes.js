import express from 'express';
import { signup } from '../controllers/auth/signup..js';
import { login } from '../controllers/auth/login.js';
import { refreshToken } from '../controllers/auth/refresh.js';
import { logout } from '../controllers/auth/logout.js';
import { changePassword } from '../controllers/auth/changePassword.js';

export const authRouter = express.Router();

authRouter.post('/change-password', changePassword);

authRouter.post('/signup', signup);
authRouter.post('/login', login);
authRouter.post('/refresh', refreshToken);
authRouter.post('/logout', logout);
