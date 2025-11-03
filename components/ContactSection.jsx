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
				.min(2, "Your name must be at least 2 characters")
				.required("Name is required"),
			email: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
			subject: Yup.string()
				.min(3, "Subject must be at least 3 characters")
				.required("Subject is required"),
			description: Yup.string()
				.min(10, "Message must be at least 10 characters")
				.required("Description is required"),
		}),
		onSubmit: (values, { resetForm }) => {
			console.log("Form submitted:", values);
			addToast({
				title: "Message Sent ✅",
				description: "Your message has been sent successfully!",
			});
			resetForm();
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
					placeholder='Enter your name'
					isRequired
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					isInvalid={formik.touched.name && !!formik.errors.name}
					errorMessage={formik.touched.name && formik.errors.name}
				/>

				<Input
					name='email'
					label='Email'
					type='email'
					placeholder='Enter your email'
					isRequired
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					isInvalid={formik.touched.email && !!formik.errors.email}
					errorMessage={formik.touched.email && formik.errors.email}
				/>

				<Input
					name='subject'
					label='Subject'
					placeholder='Enter your subject'
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
					name='description'
					label='Description'
					placeholder='Enter your message'
					isRequired
					minRows={4}
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
					Send
				</Button>

				<Button
					variant='flat'
					onPress={() =>
						addToast({
							title: "Toast test",
							description: "Toast displayed successfully",
						})
					}>
					Show Toast
				</Button>
			</form>
		</div>
	);
};

export default ContactSection;
