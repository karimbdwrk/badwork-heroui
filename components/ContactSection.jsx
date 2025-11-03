"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { addToast } from "@heroui/toast";

const ContactSection = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			subject: "",
			description: "",
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.min(2, "At least 2 chars")
				.required("Name required"),
			email: Yup.string()
				.email("Invalid email")
				.required("Email required"),
			subject: Yup.string()
				.min(3, "At least 3 chars")
				.required("Subject required"),
			description: Yup.string()
				.min(10, "At least 10 chars")
				.required("Description required"),
		}),
		onSubmit: async (values, { resetForm }) => {
			try {
				const res = await fetch("/api/contact", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(values),
				});

				if (!res.ok) throw new Error("Failed to send");

				addToast({
					title: "✅ Message sent!",
					description: "Your message was successfully delivered.",
				});

				resetForm();
			} catch (error) {
				console.error(error);
				addToast({
					title: "❌ Error",
					description:
						"Failed to send your message. Please try again.",
				});
			}
		},
	});

	return (
		<div
			className='contact-section h-screen w-screen overflow-hidden flex flex-col items-center justify-center'
			id='contact'>
			<form
				onSubmit={formik.handleSubmit}
				className='contact-form flex flex-col w-full flex-wrap md:flex-nowrap gap-4 max-w-xl'>
				<Input
					name='name'
					label='Name'
					isRequired
					placeholder='Enter your name'
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
					placeholder='Enter your email'
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					isInvalid={formik.touched.email && !!formik.errors.email}
					errorMessage={formik.touched.email && formik.errors.email}
				/>
				<Input
					name='subject'
					label='Subject'
					isRequired
					placeholder='Enter your subject'
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
					name='description'
					label='Description'
					isRequired
					minRows={4}
					placeholder='Enter your message'
					value={formik.values.description}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					isInvalid={
						formik.touched.description &&
						!!formik.errors.description
					}
					errorMessage={
						formik.touched.description && formik.errors.description
					}
				/>
				<Button
					type='submit'
					color='primary'
					isDisabled={formik.isSubmitting}>
					{formik.isSubmitting ? "Sending..." : "Send"}
				</Button>
			</form>
		</div>
	);
};

export default ContactSection;
