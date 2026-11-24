"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { Select, SelectItem } from "@heroui/select";
import { addToast } from "@/utils/toast";
import { CONTACT_EMAIL, CONTACT_SUBJECTS } from "@/config/contact";

const fieldClassNames = {
	inputWrapper:
		"bg-bw-surface shadow-none data-[hover=true]:bg-bw-line/60 group-data-[focus=true]:bg-bw-surface rounded-md",
	label: "text-bw-muted",
};

// Même rendu que les champs texte : le Select HeroUI expose "trigger" au lieu de "inputWrapper"
const selectClassNames = {
	trigger:
		"bg-bw-surface shadow-none data-[hover=true]:bg-bw-line/60 data-[focus=true]:bg-bw-surface data-[open=true]:bg-bw-surface rounded-md",
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
				.min(2, "Votre nom doit contenir au moins 2 caractères")
				.max(100, "Votre nom ne doit pas dépasser 100 caractères")
				.required("Votre nom est requis"),
			email: Yup.string()
				.email("Adresse email invalide")
				.max(254, "Adresse email trop longue")
				.required("Votre email est requis"),
			subject: Yup.string()
				.oneOf(CONTACT_SUBJECTS, "Choisissez un objet")
				.required("Choisissez un objet"),
			message: Yup.string()
				.min(30, "Votre message doit contenir au moins 30 caractères")
				.max(5000, "Votre message ne doit pas dépasser 5000 caractères")
				.required("Votre message est requis"),
		}),
		onSubmit: async (values, { resetForm }) => {
			try {
				await sendContact(values);

				addToast({
					title: "Message envoyé",
					description: "Nous revenons vers vous au plus vite.",
				});
				setIsSend(true);
				resetForm();
			} catch (error) {
				console.error("Envoi du formulaire échoué :", error);
				addToast({
					title: "Votre message n'a pas été envoyé",
					description: `Réessayez, ou écrivez-nous à ${CONTACT_EMAIL}.`,
					color: "danger",
				});
			}
		},
	});

	// Un seul appel : le serveur choisit les destinataires (la demande pour nous,
	// la confirmation pour l'adresse saisie)
	const sendContact = async (values) => {
		const res = await fetch("/api/send-email", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		});

		if (!res.ok) {
			throw new Error(`send-email a répondu ${res.status}`);
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
						Un projet en tête ?
					</h2>
					<p className='mt-6 max-w-[38ch] text-sm sm:text-base leading-relaxed text-bw-muted'>
						Tout projet commence par un simple message. Parlez-nous de ce
						que vous imaginez, nous revenons vers vous au plus vite.
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
								label='Nom'
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
							<Select
								name='subject'
								label='Objet'
								isRequired
								className='sm:col-span-2'
								classNames={selectClassNames}
								selectedKeys={formik.values.subject ? [formik.values.subject] : []}
								onSelectionChange={(keys) =>
									formik.setFieldValue("subject", Array.from(keys)[0] ?? "")
								}
								onClose={() => formik.setFieldTouched("subject", true)}
								isInvalid={formik.touched.subject && !!formik.errors.subject}
								errorMessage={formik.touched.subject && formik.errors.subject}>
								{CONTACT_SUBJECTS.map((subject) => (
									<SelectItem key={subject}>{subject}</SelectItem>
								))}
							</Select>
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
									{formik.values.message.length} caractères
									{formik.values.message.length < 30 &&
										` · encore ${30 - formik.values.message.length} minimum`}
								</p>
								<Button
									type='submit'
									radius='sm'
									className='h-12 px-8 bg-foreground text-background font-medium tracking-tight transition-[transform,opacity] duration-200 hover:opacity-90 data-[pressed=true]:scale-[0.98]'
									isLoading={formik.isSubmitting}
									isDisabled={formik.isSubmitting}>
									{formik.isSubmitting ? "Envoi…" : "Envoyer le message"}
								</Button>
							</div>
						</form>
					) : (
						<div
							role='status'
							className='flex h-full flex-col justify-center rounded-lg bg-bw-surface p-8 sm:p-12'>
							<p className='font-mono text-xs text-bw-muted'>
								Message reçu
							</p>
							<h3 className='mt-4 text-2xl sm:text-3xl font-semibold tracking-tight'>
								Merci pour votre message.
							</h3>
							<p className='mt-4 max-w-[42ch] text-sm sm:text-base leading-relaxed text-bw-muted'>
								Une confirmation vient de vous être envoyée par email. Nous
								revenons vers vous très vite.
							</p>
							<button
								type='button'
								onClick={() => setIsSend(false)}
								className='mt-8 self-start text-sm underline decoration-bw-line underline-offset-[6px] transition-colors duration-200 hover:decoration-bw-fg'>
								Envoyer un autre message
							</button>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
