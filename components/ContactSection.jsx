"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { addToast } from "@/utils/toast";

const CONTACT_EMAIL = "contact@badwork.io";

const fieldClassNames = {
	inputWrapper:
		"bg-bw-surface shadow-none data-[hover=true]:bg-bw-line/60 group-data-[focus=true]:bg-bw-surface rounded-md",
	label: "text-bw-muted",
};

const ContactSection = () => {
	const [isSend, setIsSend] = useState(false);

	// Fonction pour capitaliser la première lettre de chaque mot
	const capitalizeWords = (str) => {
		return str.replace(/\b\w/g, (char) => char.toUpperCase());
	};

	// Fonction pour valider et nettoyer l'email (uniquement caractères autorisés)
	const sanitizeEmail = (str) => {
		// Autorise uniquement : lettres, chiffres, points, tirets, underscores, arobase
		// Regex stricte pour adresses email valides
		return str.toLowerCase().replace(/[^a-z0-9@._\-+]/g, ""); // Supprime tous les caractères non autorisés
	};

	// Fonction pour capitaliser après les points
	const capitalizeAfterPeriod = (str) => {
		return str.replace(/(^\w|\.\s+\w)/g, (char) => char.toUpperCase());
	};

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			subject: "",
			message: "",
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.min(2, "Your name must be at least 2 characters")
				.required("Your name is required"),
			email: Yup.string()
				.email("Invalid email")
				.required("Your email is required"),
			subject: Yup.string()
				.min(5, "Your subject must be at least 5 characters")
				.required("Your subject is required"),
			message: Yup.string()
				.min(30, "Your message must be at least 30 characters")
				.required("Your message is required"),
		}),
		onSubmit: async (values, { resetForm }) => {
			try {
				// Le message au propriétaire doit partir ; la confirmation client est secondaire
				await sendEmail2(
					values.name,
					values.email,
					values.subject,
					values.message
				);
				sendEmail(
					values.name,
					values.email,
					values.subject,
					values.message
				).catch((err) =>
					console.error("Confirmation email failed:", err.message)
				);

				addToast({
					title: "Message sent",
					description: "We'll get back to you within two working days.",
				});
				setIsSend(true);
				resetForm();
			} catch (error) {
				console.error("sendEmail failed:", error);
				addToast({
					title: "Your message wasn't sent",
					description: `Please try again, or write to ${CONTACT_EMAIL}.`,
					color: "danger",
				});
			}
		},
	});

	const sendEmail = async (name, email, subject, message) => {
		const res = await fetch("/api/send-email", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				to: email,
				name,
				email,
				subject,
				message,
				isOwner: false, // Email de confirmation au client
			}),
		});

		if (!res.ok) {
			const error = await res.json();
			throw new Error(error?.message || "Failed to send email");
		}

		return res.json();
	};

	const sendEmail2 = async (name, email, subject, message) => {
		const res = await fetch("/api/send-email", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				to: "karim@badwork.fr",
				name,
				email,
				subject,
				message,
				isOwner: true, // Email au propriétaire du site
			}),
		});

		if (!res.ok) {
			const error = await res.json();
			throw new Error(error?.message || "Failed to send email");
		}

		return res.json();
	};

	// Gestionnaires de changement personnalisés
	const handleNameChange = (e) => {
		const formatted = capitalizeWords(e.target.value);
		formik.setFieldValue("name", formatted);
	};

	const handleEmailChange = (e) => {
		const formatted = sanitizeEmail(e.target.value);
		formik.setFieldValue("email", formatted);
	};

	const handleSubjectChange = (e) => {
		const formatted = capitalizeAfterPeriod(e.target.value);
		formik.setFieldValue("subject", formatted);
	};

	const handleMessageChange = (e) => {
		const formatted = capitalizeAfterPeriod(e.target.value);
		formik.setFieldValue("message", formatted);
	};

	return (
		<section
			id='contact'
			aria-labelledby='contact-title'
			className='contact-section relative mx-auto w-full max-w-7xl px-5 sm:px-8 pt-28 pb-36 sm:pt-36 sm:pb-44'>
			<div className='grid gap-14 lg:grid-cols-12 lg:gap-10'>
				<header className='lg:col-span-5'>
					<p className='font-mono text-xs text-bw-muted'>(02) — Contact</p>
					<h2
						id='contact-title'
						className='mt-4 text-4xl sm:text-6xl font-semibold tracking-tighter leading-[0.95]'>
						Have a project in mind?
					</h2>
					<p className='mt-6 max-w-[38ch] text-sm sm:text-base leading-relaxed text-bw-muted'>
						Every great project begins with a simple message. Tell us what
						you're building and we'll reply within two working days.
					</p>
					<a
						href={`mailto:${CONTACT_EMAIL}`}
						className='mt-10 inline-block font-mono text-sm underline decoration-bw-line underline-offset-[6px] transition-colors duration-200 hover:decoration-bw-fg'>
						{CONTACT_EMAIL}
					</a>
				</header>

				<div className='lg:col-span-6 lg:col-start-7'>
					{!isSend ? (
						<form
							noValidate
							onSubmit={formik.handleSubmit}
							className='contact-form grid gap-4 sm:grid-cols-2'>
							<Input
								name='name'
								label='Name'
								isRequired
								autoComplete='name'
								classNames={fieldClassNames}
								value={formik.values.name}
								onChange={handleNameChange}
								onBlur={formik.handleBlur}
								isInvalid={formik.touched.name && !!formik.errors.name}
								errorMessage={formik.touched.name && formik.errors.name}
							/>
							<Input
								name='email'
								type='email'
								label='Email'
								isRequired
								autoComplete='email'
								classNames={fieldClassNames}
								value={formik.values.email}
								onChange={handleEmailChange}
								onBlur={formik.handleBlur}
								isInvalid={formik.touched.email && !!formik.errors.email}
								errorMessage={formik.touched.email && formik.errors.email}
							/>
							<Input
								name='subject'
								label='Subject'
								isRequired
								className='sm:col-span-2'
								classNames={fieldClassNames}
								value={formik.values.subject}
								onChange={handleSubjectChange}
								onBlur={formik.handleBlur}
								isInvalid={formik.touched.subject && !!formik.errors.subject}
								errorMessage={formik.touched.subject && formik.errors.subject}
							/>
							<Textarea
								name='message'
								label='Message'
								isRequired
								minRows={6}
								className='sm:col-span-2'
								classNames={fieldClassNames}
								value={formik.values.message}
								onChange={handleMessageChange}
								onBlur={formik.handleBlur}
								isInvalid={formik.touched.message && !!formik.errors.message}
								errorMessage={formik.touched.message && formik.errors.message}
							/>
							<div className='sm:col-span-2 mt-2 flex flex-wrap items-center justify-between gap-4'>
								<p className='font-mono text-xs tabular-nums text-bw-muted'>
									{formik.values.message.length} characters
									{formik.values.message.length < 30 &&
										` · ${30 - formik.values.message.length} more needed`}
								</p>
								<Button
									type='submit'
									radius='sm'
									className='h-12 px-8 bg-foreground text-background font-medium tracking-tight transition-[transform,opacity] duration-200 hover:opacity-90 data-[pressed=true]:scale-[0.98]'
									isLoading={formik.isSubmitting}
									isDisabled={formik.isSubmitting}>
									{formik.isSubmitting ? "Sending…" : "Send message"}
								</Button>
							</div>
						</form>
					) : (
						<div
							role='status'
							className='flex h-full flex-col justify-center rounded-lg bg-bw-surface p-8 sm:p-12'>
							<p className='font-mono text-xs text-bw-muted'>
								Message received
							</p>
							<h3 className='mt-4 text-2xl sm:text-3xl font-semibold tracking-tight'>
								Thanks for reaching out.
							</h3>
							<p className='mt-4 max-w-[42ch] text-sm sm:text-base leading-relaxed text-bw-muted'>
								We've sent a confirmation to your inbox and will get back to you
								shortly.
							</p>
							<button
								type='button'
								onClick={() => setIsSend(false)}
								className='mt-8 self-start text-sm underline decoration-bw-line underline-offset-[6px] transition-colors duration-200 hover:decoration-bw-fg'>
								Send another message
							</button>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
