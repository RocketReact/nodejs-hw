import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectMongoDB } from './db/connectMongoDB.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import { logger } from './middleware/logger.js';
import notesRoutes from './routes/notesRoutes.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { errors } from 'celebrate';
import cookieParser from 'cookie-parser';
const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(logger);
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(authRoutes);
app.use(notesRoutes);
app.use(userRoutes);
app.use(errors()); //celebrate validation errors
app.use(notFoundHandler);
app.use(errorHandler);
await connectMongoDB();
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
