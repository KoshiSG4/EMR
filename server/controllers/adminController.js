const { PrismaClient } = require('../generated/prisma');
const { use } = require('../routes/auth');
const prisma = new PrismaClient();

exports.createAdmin = async (req, res) => {
	const { userId, permissions } = req.body;

	try {
		const user = await prisma.user.findUnique({ where: { id: userId } });
		if (!user) {
			return res.status(404).json({ message: 'User not found' });
		}

		if (user.role !== 'ADMIN') {
			return res
				.status(400)
				.json({ message: 'User is not assigned the ADMIN role' });
		}

		const admin = await prisma.admin.create({
			data: {
				userId,
				permissions,
			},
		});

		res.status(201).json({ message: 'Admin profile created', admin });
	} catch (error) {
		res.status(500).json({
			message: 'Failed to create admin profile',
			error: error.message,
		});
	}
};

exports.getAllAdmins = async (req, res) => {
	try {
		const admins = await prisma.admin.findMany({
			include: {
				user: true,
			},
		});

		res.status(200).json(admins);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getAdminById = async (req, res) => {
	const { id } = req.params;

	try {
		const admin = await prisma.findUnique({
			where: { id: parseInt(id) },
			include: {
				user: true,
			},
		});

		if (!admin) return res.status(404).json({ message: 'Admin not found' });

		res.status(200).json(admin);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getOwnAdminProfile = async (req, res) => {
	try {
		const admin = await prisma.findUnique({
			where: { userId: req.user.userId },
			include: {
				user: {
					select: {
						name: true,
						email: true,
						role: true,
						createdAt: true,
					},
				},
			},
		});

		if (!admin) return res.status(404).json({ message: 'Admin not found' });

		res.status(200).json(admin);
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
};

exports.updateAdmin = async (req, res) => {
	const { id } = req.params;
	const { permissions } = req.body;
	try {
		const admin = await prisma.admin.update({
			where: { id: parseInt(id) },
			data: { permissions },
			include: { user: true },
		});
		res.status(200).json(admin);
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
};

exports.deleteAdmin = async (req, res) => {
	const { id } = req.params;

	try {
		await prisma.admin.delete({
			where: { id: parseInt(id) },
		});
		res.json({ message: 'Admin deleted successfully' });
	} catch (error) {
		res.status(500).json({
			message: 'Something went wrong',
			error: error.message,
		});
	}
};
