import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { patientRouter } from './routes/patientRoutes.js';
import { doctorRouter } from './routes/doctorRoutes.js';
import { adminRouter } from './routes/adminRoutes.js';
import { authenticateToken } from './middleware/authMiddleware.js';
import { PrismaClient } from './generated/prisma/index.js';
import { getLoggedInUser } from './utils/getLoggedInUser.js';
import { medicationsRouter } from './routes/medicationRoutes.js';
import labRouter from './routes/labRoutes.js';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;
const allowedOrigins = [
	'http://localhost:5173',
	'https://emr-project.vercel.app/',
];

//middleware
app.use(
	cors({
		origin: (origin, callback) => {
			if (!origin || allowedOrigins.includes(origin)) {
				callback(null, true);
			} else {
				callback(new Error('Not allowed by CORS'));
			}
		},
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		credentials: true,
	})
);
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
	res.send('EMR Server is running...');
});

app.get('/api/', authenticateToken, getLoggedInUser);
app.use('/api/patients', authenticateToken, patientRouter);
app.use('/api/doctors', authenticateToken, doctorRouter);
app.use('/api/admins', authenticateToken, adminRouter);
app.use('/api/medications', authenticateToken, medicationsRouter);
app.use('/api/laboratory', authenticateToken, labRouter);

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ message: 'Something broke!', error: err.message });
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
