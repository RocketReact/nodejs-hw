import { Router } from 'express';
import { celebrate } from 'celebrate';
import {
  loginUser,
  registerUserSchema,
} from '../validations/authValidation.js';
import { registerUser } from '../controllers/authController.js';
const router = Router();

router.post('/auth/register', celebrate(registerUserSchema), registerUser);
router.post('/auth/login', celebrate(loginUser), loginUser);
