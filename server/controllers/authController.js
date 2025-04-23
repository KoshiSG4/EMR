const { PrismaClient } = require('../generated/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

const signup = async (req, res) => {
	const { name, email, password, role } = req.body;

	try {
		const existingUser = await prisma.user.findUnique({ where: { email } });
		if (existingUser)
			return res.status(400).json({ message: 'Email already in use' });

		const hashedPassword = await bcrypt.hash(password, 10);

		const user = await prisma.user.create({
			data: {
				name,
				email,
				password: hashedPassword,
				role,
			},
		});

		res.status(201).json({ message: 'User created successfully', user });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Signup failed' });
	}
};

const login = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await prisma.user.findUnique({ where: { email } });
		if (!user)
			return res.status(400).json({ message: 'Invalid credentials' });

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch)
			return res.status(400).json({ message: 'Invalid credentials' });

		const token = jwt.sign(
			{ userId: user.id, role: user.role },
			process.env.JWT_SECRET,
			{
				expiresIn: '1h',
			}
		);

		res.status(200).json({ token, user });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Login failed' });
	}
};

module.exports = { signup, login };
