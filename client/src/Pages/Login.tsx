import { SVGProps, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { z, ZodError } from 'zod';
import { User } from '@/types/userTypes';
import { da } from 'zod/v4/locales';

const loginSchema = z.object({
	email: z.string().email('Invalid email address'),
	password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const changePasswordSchema = z
	.object({
		email: z.string().email('Invalid email address'),
		newPassword: z
			.string()
			.min(6, 'Password must be at least 6 characters long'),
		confirmPassword: z
			.string()
			.min(6, 'Password must be at least 6 characters long'),
	})
	.refine((data) => data.newPassword === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	});

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		newPassword: '',
		confirmPassword: '',
	});
	const [errors, setErrors] = useState<{
		email?: string;
		password?: string;
		newPassword?: string;
		confirmPassword?: string;
		submit?: string;
	}>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [mode, setMode] = useState<'login' | 'changePassword'>('login');

	const navigate = useNavigate();
	const { login, changePassword } = useAuth();

	const handleSubmit = async (data: typeof formData) => {
		try {
			setIsSubmitting(true);
			setErrors({});

			if (mode === 'login') {
				const validatedData = loginSchema.parse(data);

				const user = await login(
					validatedData.email,
					validatedData.password
				);
				if (user.mustChangePassword) {
					setMode('changePassword');
				} else {
					navigate('/');
				}
			} else if (mode === 'changePassword') {
				if (formData.newPassword !== formData.confirmPassword) {
					setErrors({ submit: 'Passwords do not match' });
					return;
				}

				const validatedData = changePasswordSchema.parse(data);
				await changePassword(
					validatedData.email,
					validatedData.newPassword
				);

				alert('Password changed successfully! Please log in again.');
				setMode('login');
				setFormData({
					email: formData.email,
					password: '',
					newPassword: '',
					confirmPassword: '',
				});
			}
		} catch (error) {
			if (error instanceof ZodError) {
				const formattedErrors: Record<string, string> = {};
				error.issues.forEach((err) => {
					if (err.path.length > 0) {
						formattedErrors[err.path[0].toString()] = err.message;
					}
				});
				setErrors(formattedErrors);
			} else {
				setErrors({ submit: 'Failed to sign in. Please try again.' });
			}
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));

		if (errors[name as keyof typeof errors]) {
			setErrors((prev) => ({ ...prev, [name]: undefined }));
		}
	};

	return (
		<div
			className="relative min-h-screen overflow-hidden"
			style={{
				background:
					'linear-gradient(135deg, #172A3A 0%, #0c3736 45%, #004346 100%)',
			}}>
			<svg
				className="pointer-events-none absolute inset-0 h-full w-full opacity-35"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="xMidYMid slice"
				aria-hidden>
				<defs>
					<linearGradient id="pulseA" x1="0" x2="1" y1="0" y2="1">
						<stop
							offset="0%"
							stopColor="#D6F3F4"
							stopOpacity="0.9"
						/>
						<stop
							offset="100%"
							stopColor="#74B3CE"
							stopOpacity="0.25"
						/>
					</linearGradient>
					<linearGradient id="pulseB" x1="0" x2="1" y1="0" y2="1">
						<stop
							offset="0%"
							stopColor="#74B3CE"
							stopOpacity="0.9"
						/>
						<stop
							offset="100%"
							stopColor="#004346"
							stopOpacity="0.15"
						/>
					</linearGradient>
				</defs>

				<polyline
					points="0,300 200,300 240,240 270,360 300,200 340,350 420,300 600,300 780,300 820,240 860,360 900,300 1200,300"
					fill="none"
					stroke="url(#pulseA)"
					strokeWidth="6"
					strokeLinecap="round"
				/>

				<g fill="url(#pulseA)">
					<circle cx="120" cy="80" r="3" />
					<circle cx="600" cy="150" r="2" />
					<circle cx="900" cy="250" r="2.5" />
					<circle cx="400" cy="300" r="3" />
					<circle cx="750" cy="100" r="2" />
				</g>

				<g
					transform="translate(950,80) scale(1.15)"
					stroke="url(#pulseB)"
					strokeWidth="5"
					fill="none">
					<path d="M40 20 C60 40, 80 60, 120 60 C170 60, 210 40, 240 10" />
					<circle cx="260" cy="80" r="28" />
					<path d="M260 108 L260 140" />
				</g>
			</svg>

			<div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
				{/* Left / Branding */}
				<div className="flex w-full flex-1 flex-col justify-center px-6 py-12 lg:py-24 lg:px-24">
					<div className="max-w-xl">
						<h1 className="mb-4 text-4xl font-extrabold tracking-tight text-[#D6F3F4] sm:text-5xl">
							ERM
						</h1>
						<p className="mb-6 text-lg text-[#D6F3F4] opacity-85">
							Secure, modern electronic medical records — built
							for clinicians and hospitals.
						</p>
						<div className="mt-6 inline-flex items-center gap-3 rounded-md px-3 py-2 bg-[#004346]/10 border border-[#508991]/25">
							<span className="text-sm text-[#74B3CE] font-medium">
								Patient-first
							</span>
							<span className="text-xs text-[#D6F3F4] opacity-70">
								| Secure UI
							</span>
						</div>
					</div>
				</div>

				{/* Right / Login Card */}
				<div className="flex w-full flex-1 items-center justify-center px-6 py-12 lg:py-24 lg:px-16">
					<div
						className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
						aria-hidden={false}>
						<div
							aria-hidden="true"
							className="absolute inset-0 -z-10 rounded-2xl"
							style={{
								background:
									'linear-gradient(135deg, rgba(116,179,206,0.06), rgba(214,243,244,0.03))',
								filter: 'blur(48px)',
							}}
						/>

						<div
							className="relative rounded-2xl border p-6"
							style={{
								background:
									'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))',
								borderColor: '#50899133',
							}}>
							<h2 className="mb-1 text-center text-2xl font-semibold text-[#D6F3F4]">
								Sign In
							</h2>
							<p className="mb-4 text-center text-sm text-[#D6F3F4] opacity-80">
								{mode === 'login'
									? 'Enter your credentials to continue'
									: 'You must create a new password before continuing'}
							</p>

							<form
								onSubmit={(e) => {
									e.preventDefault();
									handleSubmit(formData);
								}}
								className="space-y-4"
								noValidate>
								{/* Email */}
								<div>
									<label
										htmlFor="email"
										className="mb-1 block text-sm font-medium text-[#D6F3F4] opacity-85">
										Email
									</label>
									<input
										id="email"
										name="email"
										type="email"
										value={formData.email}
										onChange={handleChange}
										required
										placeholder="you@example.com"
										className={`w-full rounded-lg border px-3 py-2 text-white placeholder:text-white/60 bg-white/10 backdrop-blur-sm
                      focus:outline-none focus:ring-2 focus:ring-[#74B3CE]/50 focus:border-[#74B3CE]/60
                      border-[#508991]/30`}
										aria-invalid={!!errors.email}
										aria-describedby={
											errors.email
												? 'email-error'
												: undefined
										}
									/>
									{errors.email && (
										<p
											id="email-error"
											className="mt-1 text-sm text-red-400">
											{errors.email}
										</p>
									)}
								</div>

								{mode === 'login' ? (
									<div>
										<label
											htmlFor="password"
											className="mb-1 block text-sm font-medium text-[#D6F3F4] opacity-85">
											Password
										</label>
										<input
											id="password"
											name="password"
											type="password"
											value={formData.password}
											onChange={handleChange}
											required
											placeholder="Password"
											className={`w-full rounded-lg border px-3 py-2 text-white placeholder:text-white/60 bg-white/10 backdrop-blur-sm
                      focus:outline-none focus:ring-2 focus:ring-[#74B3CE]/50 focus:border-[#74B3CE]/60
                      border-[#508991]/30`}
											aria-invalid={!!errors.password}
											aria-describedby={
												errors.password
													? 'password-error'
													: undefined
											}
										/>
										{errors.password && (
											<p
												id="password-error"
												className="mt-1 text-sm text-red-400">
												{errors.password}
											</p>
										)}
									</div>
								) : (
									<>
										{/* New Password */}
										<div>
											<label
												htmlFor="newPassword"
												className="mb-1 block text-sm font-medium text-[#D6F3F4] opacity-85">
												New Password
											</label>
											<input
												id="newPassword"
												name="newPassword"
												type="password"
												value={formData.newPassword}
												onChange={handleChange}
												required
												placeholder="New Password"
												className={`w-full rounded-lg border px-3 py-2 text-white placeholder:text-white/60 bg-white/10 backdrop-blur-sm
                      focus:outline-none focus:ring-2 focus:ring-[#74B3CE]/50 focus:border-[#74B3CE]/60
                      border-[#508991]/30`}
												aria-invalid={
													!!errors.newPassword
												}
												aria-describedby={
													errors.newPassword
														? 'newPassword-error'
														: undefined
												}
											/>
											{errors.newPassword && (
												<p
													id="newPassword-error"
													className="mt-1 text-sm text-red-400">
													{errors.newPassword}
												</p>
											)}
										</div>

										{/* confirm password */}
										<div>
											<label
												htmlFor="confirmPassword"
												className="mb-1 block text-sm font-medium text-[#D6F3F4] opacity-85">
												Confirm Password
											</label>
											<input
												id="confirmPassword"
												name="confirmPassword"
												type="confirmPassword"
												value={formData.confirmPassword}
												onChange={handleChange}
												required
												placeholder="Confirm Password"
												className={`w-full rounded-lg border px-3 py-2 text-white placeholder:text-white/60 bg-white/10 backdrop-blur-sm
                      focus:outline-none focus:ring-2 focus:ring-[#74B3CE]/50 focus:border-[#74B3CE]/60
                      border-[#508991]/30`}
												aria-invalid={
													!!errors.confirmPassword
												}
												aria-describedby={
													errors.confirmPassword
														? 'confirmPassword-error'
														: undefined
												}
											/>
											{errors.confirmPassword && (
												<p
													id="confirmPassword-error"
													className="mt-1 text-sm text-red-400">
													{errors.confirmPassword}
												</p>
											)}
										</div>
									</>
								)}
								{/* Password */}

								{errors.submit && (
									<p className="text-center text-sm text-red-400">
										{errors.submit}
									</p>
								)}

								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full rounded-lg border px-4 py-2 font-semibold text-white transition-transform duration-200 ease-out
									focus:outline-none focus-visible:ring-2 focus-visible:ring-[#508991]/60 border-[#508991]/30 disabled:opacity-60"
									style={{
										backgroundColor: '#003136',
										boxShadow:
											'0 4px 12px rgba(0,67,70,0.18)',
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.boxShadow =
											'0 5px 17px rgba(116,179,206,0.22), 0 0 12px rgba(116,179,206,0.12)';
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.boxShadow =
											'0 4px 12px rgba(0,67,70,0.18)';
									}}>
									{isSubmitting
										? mode === 'login'
											? 'Signing In...'
											: 'Updating...'
										: mode === 'login'
										? 'Sign In'
										: 'Update Password'}
								</button>
							</form>

							{/* subtle footer / version */}
							<div className="mt-6 text-center text-xs text-[#D6F3F4] opacity-60">
								v1.0 - ERM UI
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
