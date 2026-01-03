"use client";

import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input, Textarea } from "@heroui/input";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";

// 💡 Importez votre client Supabase
// Ajustez le chemin si nécessaire.
import { supabase } from "@/lib/supabase";

const ContactSection = () => {
	const [isSend, setIsSend] = useState(false);

	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			subject: "",
			description: "",
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
			// L'objet 'values' contient name, email, subject, message
			// qui correspondent aux colonnes de votre table.

			try {
				// 🚀 Utilisation de supabase-js pour l'insertion
				// const { error } = await supabase
				// 	.from("contact_messages") // Nom de la table
				// 	.insert([
				// 		// Supabase s'attend à un tableau d'objets pour `insert`
				// 		{
				// 			name: values.name,
				// 			email: values.email,
				// 			subject: values.subject,
				// 			message: values.message,
				// 		},
				// 	]);

				// // 💡 Gestion de l'erreur
				// // Si `error` n'est pas null, nous levons une erreur pour être capturée par le `catch`.
				// if (error) {
				// 	console.error("Supabase Error:", error);
				// 	// On peut jeter l'erreur pour la capturer dans le bloc catch
				// 	throw new Error(
				// 		error.message || "Supabase insertion failed."
				// 	);
				// }

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

	return (
		<div
			className='contact-section relative min-h-screen w-screen overflow-hidden flex flex-col items-center justify-center p-5'
			id='contact'>
			{!isSend ? (
				<form
					onSubmit={formik.handleSubmit}
					className='contact-form flex flex-col w-full flex-wrap md:flex-nowrap gap-4 max-w-xl'>
					<Input
						name='name'
						label='Name'
						isRequired
						value={formik.values.name}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						isInvalid={formik.touched.name && !!formik.errors.name}
						errorMessage={formik.touched.name && formik.errors.name}
					/>
					<Input
						name='email'
						type='email'
						label='Email'
						isRequired
						value={formik.values.email}
						onChange={formik.handleChange}
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
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						isInvalid={
							formik.touched.subject && !!formik.errors.subject
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
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						isInvalid={
							formik.touched.message && !!formik.errors.message
						}
						errorMessage={
							formik.touched.message && formik.errors.message
						}
					/>
					<Button
						type='submit'
						className='bg-white text-black hover:bg-gray-200'
						isDisabled={formik.isSubmitting}>
						{formik.isSubmitting ? "Sending..." : "Send"}
					</Button>
				</form>
			) : (
				<div className='text-center'>
					<h2 className='text-2xl font-bold mb-4'>
						Thank you for reaching out!
					</h2>
					<p className='mb-4'>
						We have received your message and will get back to you
						shortly.
					</p>
				</div>
			)}
		</div>
	);
};

export default ContactSection;
