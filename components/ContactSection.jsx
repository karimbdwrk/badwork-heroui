"use client";

import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input, Textarea } from "@heroui/input";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";
import { useTheme } from "next-themes";

// 💡 Importez votre client Supabase
// Ajustez le chemin si nécessaire.
import { supabase } from "@/lib/supabase";

const ContactSection = () => {
	const [isSend, setIsSend] = useState(false);
	const [mounted, setMounted] = useState(false);
	const { theme, systemTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	// Utiliser le thème actuel ou le thème système en fallback
	const currentTheme = mounted
		? theme === "system"
			? systemTheme
			: theme
		: "dark";

	// Fonction pour capitaliser la première lettre de chaque mot
	const capitalizeWords = (str) => {
		return str.replace(/\b\w/g, (char) => char.toUpperCase());
	};

	// Fonction pour valider et nettoyer l'email (uniquement caractères autorisés)
	const sanitizeEmail = (str) => {
		// Autorise uniquement : lettres, chiffres, points, tirets, underscores, arobase
		// Regex stricte pour adresses email valides
		return str
			.toLowerCase()
			.replace(/[^a-z0-9@._\-+]/g, ''); // Supprime tous les caractères non autorisés
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
				sendEmail(
					values.name,
					values.email,
					values.subject,
					values.message
				);

				sendEmail2(
					values.name,
					values.email,
					values.subject,
					values.message
				);

				addToast({
					title: "✅ Message sent!",
					description: "Your message was successfully delivered.",
				});
				setIsSend(true);
				resetForm();
			} catch (error) {
				console.error("General Error or Supabase Error:", error);
				addToast({
					title: "❌ Error",
					description:
						"Failed to send your message. Please try again.",
				});
			}
		},
	});

	const sendEmail = async (name, email, subject, message) => {
		try {
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

			const data = await res.json();
			console.log("Email sent successfully:", data);
		} catch (err) {
			console.error("sendEmail failed:", err.message);
		}
	};

	const sendEmail2 = async (name, email, subject, message) => {
		try {
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

			const data = await res.json();
			console.log("Email sent successfully:", data);
		} catch (err) {
			console.error("sendEmail failed:", err.message);
		}
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
		<div
			className='contact-section relative min-h-screen w-screen overflow-hidden flex flex-col items-center justify-center p-5'
			id='contact'>
			{!isSend ? (
				<div className='w-full flex flex-col items-center'>
					<div className='text-center mb-6'>
						<h2
							className='text-2xl sm:text-3xl font-bold'
							style={{
								color:
									theme === "light" ? "#303030" : "#FFFFFF",
							}}>
							Have a project in mind?
						</h2>
						<p
							className='text-xs sm:text-lg'
							style={{
								color:
									theme === "light" ? "#303030" : "#FFFFFF",
							}}>
							Every great project begins with a simple message.
						</p>
					</div>
					<form
						onSubmit={formik.handleSubmit}
						className='contact-form flex flex-col w-full flex-wrap md:flex-nowrap gap-4 max-w-xl'>
						<Input
							name='name'
							label='Name'
							isRequired
							value={formik.values.name}
							onChange={handleNameChange}
							onBlur={formik.handleBlur}
							isInvalid={
								formik.touched.name && !!formik.errors.name
							}
							errorMessage={
								formik.touched.name && formik.errors.name
							}
						/>
						<Input
							name='email'
							type='email'
							label='Email'
							isRequired
							value={formik.values.email}
							onChange={handleEmailChange}
							onBlur={formik.handleBlur}
							isInvalid={
								formik.touched.email && !!formik.errors.email
							}
							errorMessage={
								formik.touched.email && formik.errors.email
							}
						/>
						<Input
							name='subject'
							label='Subject'
							isRequired
							value={formik.values.subject}
							onChange={handleSubjectChange}
							onBlur={formik.handleBlur}
							isInvalid={
								formik.touched.subject &&
								!!formik.errors.subject
							}
							errorMessage={
								formik.touched.subject && formik.errors.subject
							}
						/>
						<Textarea
							name='message'
							label='Message'
							isRequired
							minRows={4}
							value={formik.values.message}
							onChange={handleMessageChange}
							onBlur={formik.handleBlur}
							isInvalid={
								formik.touched.message &&
								!!formik.errors.message
							}
							errorMessage={
								formik.touched.message && formik.errors.message
							}
						/>
						<Button
							type='submit'
							style={{
								backgroundColor:
									currentTheme === "light"
										? "#303030"
										: "#FFFFFF",
								color:
									currentTheme === "light"
										? "#FFFFFF"
										: "#000000",
							}}
							isDisabled={formik.isSubmitting}>
							{formik.isSubmitting ? "Sending..." : "Send"}
						</Button>
					</form>
				</div>
			) : (
				<div className='text-center'>
					<h2
						className='text-2xl font-bold mb-4'
						style={{
							color: theme === "light" ? "#303030" : "#FFFFFF",
						}}>
						Thank you for reaching out!
					</h2>
					<p
						className='mb-4'
						style={{
							color: theme === "light" ? "#303030" : "#FFFFFF",
						}}>
						We have received your message and will get back to you
						shortly.
					</p>
				</div>
			)}
		</div>
	);
};

export default ContactSection;
