import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import { keycloak, memoryStore } from './keycloak/keycloak.js';
import { patientRouter } from './routes/patientRoutes.js';
import { doctorRouter } from './routes/doctorRoutes.js';
import { adminRouter } from './routes/adminRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(
	session({
		secret: 'some secret',
		resave: false,
		saveUninitialized: true,
		store: memoryStore,
	})
);

app.use(keycloak.middleware());
app.use('/api/patients', patientRouter);
app.use('/api/doctors', doctorRouter);
app.use('/api/admins', adminRouter);

app.get('/', (req, res) => {
	res.send('EMR Server is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
