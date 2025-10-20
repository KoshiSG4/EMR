import { SVGProps, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { set, z, ZodError } from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FaStethoscope } from 'react-icons/fa';

const loginSchema = z.object({
	email: z.string().email('Invalid email address'),
	password: z.string().min(6, 'Password must be at least 6 characters long'),
});

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState<{
		email?: string;
		password?: string;
		submit?: string;
	}>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const navigate = useNavigate();
	const { login } = useAuth();

	const handleSubmit = async (data: typeof formData) => {
		try {
			setIsSubmitting(true);
			setErrors({});

			const validatedData = loginSchema.parse(data);

			await login(validatedData.email, validatedData.password);
			navigate('/');
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

	const Stethoscope = (props: SVGProps<SVGSVGElement>) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="1em"
				height="1em"
				{...props}>
				<g
					fill="none"
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2">
					<path d="M11 2v2M5 2v2m0-1H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path>
					<path d="M8 15a6 6 0 0 0 12 0v-3"></path>
					<circle cx="20" cy="10" r="2"></circle>
				</g>
			</svg>
		);
	};

	return (
		<div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-700 via-violet-700 to-indigo-800">
			<svg
				className="pointer-events-none absolute inset-0 h-full w-full opacity-45"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="xMidYMid slice">
				<defs>
					<linearGradient id="pulse" x1="0" x2="1" y1="0" y2="1">
						<stop
							offset="0%"
							stopColor="#ffffff"
							stopOpacity="0.85"
						/>
						<stop
							offset="100%"
							stopColor="#e0e7ff"
							stopOpacity="0.4"
						/>
					</linearGradient>
					<linearGradient
						id="stethoscopeGradient"
						x1="0"
						x2="1"
						y1="0"
						y2="1">
						<stop
							offset="0%"
							stopColor="#ffffff"
							stopOpacity="0.8"
						/>
						<stop
							offset="100%"
							stopColor="#e0e7ff"
							stopOpacity="0.4"
						/>
					</linearGradient>
				</defs>

				{/* ECG heartbeat center */}
				<polyline
					points="0,300 200,300 240,240 270,360 300,200 340,350 420,300 600,300 780,300 820,240 860,360 900,300 1200,300"
					fill="none"
					stroke="url(#pulse)"
					strokeWidth="6"
					strokeLinecap="round"
				/>

				{/* Tiny floating dots */}
				<g fill="url(#pulse)">
					<circle cx="120" cy="80" r="3" />
					<circle cx="600" cy="150" r="2" />
					<circle cx="900" cy="250" r="2.5" />
					<circle cx="400" cy="300" r="3" />
					<circle cx="750" cy="100" r="2" />
				</g>

				<g
					transform="translate(950,80) scale(1.2)"
					stroke="url(#pulse)"
					strokeWidth="6"
					fill="none">
					{' '}
					<path d="M40 20 C60 40, 80 60, 120 60 C170 60, 210 40, 240 10" />{' '}
					<circle cx="260" cy="80" r="32" />{' '}
					<path d="M260 112 L260 148" />{' '}
				</g>
			</svg>

			<div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
				{/* Left Side */}
				<div className="flex w-full flex-1 flex-col justify-center px-6 py-12 lg:py-24 lg:px-24">
					<div className="max-w-xl">
						<h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
							ERM
						</h1>
						<p className="mb-6 text-lg text-white/85">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Temporibus, expedita iusto veniam atque, magni
							tempora mollitia dolorum consequatur nulla, neque
							debitis eos reprehenderit quasi ab ipsum nisi
							dolorem modi. Quos?
						</p>
					</div>
				</div>

				{/* Right Side */}
				<div className="flex w-full flex-1 items-center justify-center px-6 py-12 lg:py-24 lg:px-16">
					<div className="relative w-3/4 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/30 overflow-hidden">
						{/* Inner gradient glow */}
						<div
							aria-hidden
							className="absolute inset-0 -z-10 rounded-2xl"
							style={{
								background:
									'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(14,165,233,0.2), rgba(139,92,246,0.15))',
								filter: 'blur(60px)',
							}}
						/>

						<div className="p-6">
							<h2 className="mb-1 text-center text-2xl font-semibold text-white">
								Sign In
							</h2>
							<p className="mb-4 text-center text-sm text-white/80">
								Enter your credentials to continue
							</p>

							<form
								onSubmit={(e) => {
									e.preventDefault();
									handleSubmit(formData);
								}}
								className="space-y-4">
								{/* Email Input */}
								<div>
									<label
										htmlFor="email"
										className="mb-1 block text-sm font-medium text-white/85">
										Email
									</label>
									<Input
										id="email"
										name="email"
										type="email"
										value={formData.email}
										onChange={handleChange}
										required
										placeholder="you@example.com"
										className={`w-full rounded-lg border border-white/10 bg-white/4 px-3 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
											errors.email
												? 'ring-2 ring-red-400/60'
												: ''
										}`}
									/>
									{errors.email && (
										<p className="mt-1 text-sm text-red-500">
											{errors.email}
										</p>
									)}
								</div>

								{/* Password Input */}
								<div>
									<label
										htmlFor="password"
										className="mb-1 block text-sm font-medium text-white/85">
										Password
									</label>
									<Input
										id="password"
										name="password"
										type="password"
										value={formData.password}
										onChange={handleChange}
										required
										placeholder="Password"
										className={`w-full rounded-lg border border-white/10 bg-white/4 px-3 py-2 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
											errors.password
												? 'ring-2 ring-red-400/60'
												: ''
										}`}
									/>
									{errors.password && (
										<p className="mt-1 text-sm text-red-500">
											{errors.password}
										</p>
									)}
								</div>

								{errors.submit && (
									<p className="text-center text-sm text-red-500">
										{errors.submit}
									</p>
								)}

								<Button
									type="submit"
									className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-sky-500 px-4 py-2 text-white shadow hover:opacity-95 disabled:opacity-60"
									disabled={isSubmitting}>
									{isSubmitting ? 'Signing In...' : 'Sign In'}
								</Button>
							</form>

							<div className="mt-4 text-center text-sm text-white/80">
								Don't have an account?{' '}
								<a
									href="/signup"
									className="font-medium text-white underline">
									Sign up
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="flex min-h-screen items-center justify-center bg-purple-50/30 p-4">
				<Card className="w-full max-w-md">
					<CardHeader>
						<CardTitle className="text-center text-2xl">
							Sign In
						</CardTitle>
					</CardHeader>
					<CardContent>
						<form
							onSubmit={(e) => {
								e.preventDefault();
								handleSubmit(formData);
							}}
							className="space-y-4">
							<div className="space-y-2">
								<label
									htmlFor="email"
									className="text-sm font-medium">
									Email
								</label>
								<Input
									id="email"
									name="email"
									type="email"
									value={formData.email}
									onChange={handleChange}
									required
									placeholder="Enter your email"
									className={
										errors.email ? 'border-red-500' : ''
									}
								/>
								{errors.email && (
									<p className="text-sm text-red-500">
										{errors.email}
									</p>
								)}
							</div>
							<div className="space-y-2">
								<label
									htmlFor="password"
									className="text-sm font-medium">
									Password
								</label>
								<Input
									id="password"
									name="password"
									type="password"
									value={formData.password}
									onChange={handleChange}
									required
									placeholder="Enter your password"
									className={
										errors.password ? 'border-red-500' : ''
									}
								/>
								{errors.password && (
									<p className="text-sm text-red-500">
										{errors.password}
									</p>
								)}
							</div>
							{errors.submit && (
								<p className="text-center text-sm text-red-500">
									{errors.submit}
								</p>
							)}
							<Button
								type="submit"
								className="w-full"
								disabled={isSubmitting}>
								{isSubmitting ? 'Signing In...' : 'Sign In'}
							</Button>
							<div className="text-center text-sm">
								Don't have an account?{' '}
								<a
									href="/signup"
									className="text-purple-600 hover:text-purple-500">
									Sign up
								</a>
							</div>
						</form>
					</CardContent>
				</Card>
			</div> */}
		</div>
	);
};

export default Login;
