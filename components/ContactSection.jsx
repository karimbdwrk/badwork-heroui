"use client";

import React, { useState, useEffect } from "react";

import { Input, Textarea } from "@heroui/input";
import { Button } from "@heroui/button";
import { addToast, ToastProvider } from "@heroui/toast";

const ContactSection = () => {
	return (
		<div
			className='contact-section h-screen w-screen overflow-hidden flex flex-col items-center justify-center'
			id='contact'>
			<div className='contact-form'>
				<div className='flex flex-col w-full flex-wrap md:flex-nowrap gap-4'>
					<Input
						isRequired
						className='max-w-xl'
						label='Name'
						type='text'
						placeholder='Enter your name'
					/>
					<Input
						isRequired
						className='max-w-xl'
						label='Email'
						type='email'
						placeholder='Enter your email'
					/>
					<Input
						isRequired
						className='max-w-xl'
						label='Subject'
						type='text'
						placeholder='Enter your subject'
					/>
					<Textarea
						isRequired
						className='max-w-xl'
						label='Description'
						placeholder='Enter your description'
					/>
					<Button color='primary'>Send</Button>
					<Button
						variant={"flat"}
						onPress={() => {
							addToast({
								title: "Toast title",
								description: "Toast displayed successfully",
							});
						}}>
						Toast
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
