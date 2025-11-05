export const changePassword = async (req, res) => {
	try {
		const { email, newPassword } = req.body;

		const hashed = await bcrypt.hash(newPassword, 10);

		await prisma.user.update({
			where: { email },
			data: {
				passwordHash: hashed,
				mustChangePassword: false,
			},
		});

		res.status(200).json({ message: 'Password Updated Successfully' });
	} catch (error) {
		console.error(error);
		res.status(500).json({
			message: 'Server Error',
			error: error.message,
		});
	}
};
